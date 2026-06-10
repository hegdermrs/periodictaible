import { create } from "zustand";
import { saveOpenedIds } from "@/store/explorationPersist";

interface BurstEvent {
  x: number;
  y: number;
  color: string;
  tick: number;
}

interface TableState {
  selectedElementId: string | null;
  dimOthers: boolean;
  audioEnabled: boolean;
  volume: number;
  openedIds: string[];
  lastBurst: BurstEvent | null;
  selectElement: (id: string | null) => void;
  toggleAudio: () => void;
  setVolume: (v: number) => void;
  markOpened: (id: string) => void;
  hydrateOpened: (ids: string[]) => void;
  triggerBurst: (x: number, y: number, color: string) => void;
}

export const useTableStore = create<TableState>((set, get) => ({
  selectedElementId: null,
  dimOthers: false,
  audioEnabled: true,
  volume: 0.1,
  openedIds: [],
  lastBurst: null,
  selectElement: (id) => set({ selectedElementId: id, dimOthers: id !== null }),
  toggleAudio: () => set({ audioEnabled: !get().audioEnabled }),
  setVolume: (v) => set({ volume: v }),
  markOpened: (id) =>
    set((state) => {
      if (state.openedIds.includes(id)) return state;
      const openedIds = [...state.openedIds, id];
      saveOpenedIds(openedIds);
      return { openedIds };
    }),
  hydrateOpened: (ids) =>
    set((state) => {
      const merged = [...new Set([...state.openedIds, ...ids])];
      if (merged.length === state.openedIds.length) return state;
      return { openedIds: merged };
    }),
  triggerBurst: (x, y, color) =>
    set({ lastBurst: { x, y, color, tick: Date.now() } }),
}));
