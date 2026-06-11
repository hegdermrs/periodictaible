import { create } from "zustand";
import { saveOpenedIds } from "@/store/explorationPersist";
import { ELEMENTS } from "@/core/data/elements";

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
  devMode: boolean;
  selectElement: (id: string | null) => void;
  toggleAudio: () => void;
  setVolume: (v: number) => void;
  markOpened: (id: string) => void;
  markAllOpened: () => void;
  hydrateOpened: (ids: string[]) => void;
  triggerBurst: (x: number, y: number, color: string) => void;
  activateDevMode: () => void;
}

export const useTableStore = create<TableState>((set, get) => ({
  selectedElementId: null,
  dimOthers: false,
  audioEnabled: true,
  volume: 0.06,
  openedIds: [],
  lastBurst: null,
  devMode: false,
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
  markAllOpened: () =>
    set((state) => {
      const allIds = ELEMENTS.map((e) => e.id);
      const openedIds = [...new Set([...state.openedIds, ...allIds])];
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
  activateDevMode: () => {
    const allIds = ELEMENTS.map((e) => e.id);
    set({ devMode: true, openedIds: allIds });
    saveOpenedIds(allIds);
  },
}));
