/** Crossfade loop via Web Audio API — avoids the gap HTML <audio loop> leaves at the seam. */
export class SeamlessAudioLoop {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private buffer: AudioBuffer | null = null;
  private scheduledUntil = 0;
  private schedulerId: ReturnType<typeof setTimeout> | null = null;
  private playing = false;
  private crossfadeSec: number;
  private ready = false;

  constructor(crossfadeSec = 1.5) {
    this.crossfadeSec = crossfadeSec;
  }

  get isReady() {
    return this.ready;
  }

  async init(src: string): Promise<void> {
    if (this.ready) return;

    const ctx = new AudioContext();
    const masterGain = ctx.createGain();
    masterGain.connect(ctx.destination);

    const res = await fetch(src);
    if (!res.ok) throw new Error(`Failed to load audio: ${src}`);

    const buffer = await ctx.decodeAudioData(await res.arrayBuffer());
    this.crossfadeSec = Math.min(
      this.crossfadeSec,
      Math.max(0.4, buffer.duration * 0.2),
    );

    this.ctx = ctx;
    this.masterGain = masterGain;
    this.buffer = buffer;
    this.ready = true;
  }

  setVolume(volume: number): void {
    const ctx = this.ctx;
    const gain = this.masterGain;
    if (!ctx || !gain) return;
    gain.gain.setTargetAtTime(volume, ctx.currentTime, 0.04);
  }

  async play(): Promise<void> {
    if (!this.ready || !this.ctx || !this.buffer || !this.masterGain) return;

    await this.ctx.resume();
    this.clearScheduler();
    this.playing = true;
    this.scheduledUntil = this.ctx.currentTime;
    this.scheduleAhead();
  }

  stop(): void {
    this.playing = false;
    this.clearScheduler();
    void this.ctx?.suspend();
  }

  private clearScheduler(): void {
    if (this.schedulerId) {
      clearTimeout(this.schedulerId);
      this.schedulerId = null;
    }
  }

  private scheduleAhead(): void {
    if (!this.playing || !this.ctx || !this.buffer || !this.masterGain) return;

    const ctx = this.ctx;
    const buffer = this.buffer;
    const crossfade = this.crossfadeSec;
    const duration = buffer.duration;
    const lookahead = 12;

    while (this.scheduledUntil < ctx.currentTime + lookahead) {
      const when = this.scheduledUntil;
      const src = ctx.createBufferSource();
      const segmentGain = ctx.createGain();

      src.buffer = buffer;
      src.connect(segmentGain);
      segmentGain.connect(this.masterGain);

      segmentGain.gain.setValueAtTime(0, when);
      segmentGain.gain.linearRampToValueAtTime(1, when + crossfade);
      segmentGain.gain.setValueAtTime(1, when + duration - crossfade);
      segmentGain.gain.linearRampToValueAtTime(0, when + duration);

      src.start(when);
      src.stop(when + duration);

      this.scheduledUntil = when + duration - crossfade;
    }

    const delayMs = Math.max(
      50,
      (this.scheduledUntil - ctx.currentTime - lookahead / 2) * 1000,
    );
    this.schedulerId = setTimeout(() => this.scheduleAhead(), delayMs);
  }

  async destroy(): Promise<void> {
    this.stop();
    this.ready = false;
    if (this.ctx) {
      await this.ctx.close();
      this.ctx = null;
    }
    this.masterGain = null;
    this.buffer = null;
  }
}
