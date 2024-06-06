import { create } from "zustand";

export interface UseMySpaceStore {
  isGrid: boolean;
  setIsGrid: (value: boolean) => void;
  filter: string;
  setFilter: (value: string) => void;
}

const useMySpaceStore = create<UseMySpaceStore>((set) => ({
  isGrid: true,
  setIsGrid: (value) => set({ isGrid: value }),
  filter: "다이어리",
  setFilter: (value) => set({ filter: value }),
}));

export default useMySpaceStore;
