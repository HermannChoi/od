import { create } from "zustand";

export interface UseNavbarStore {
  whichMenu: string;
  setWhichMenu: (value: string) => void;
}

const useNavbarStore = create<UseNavbarStore>((set) => ({
  whichMenu: "",
  setWhichMenu: (value: string) => set({ whichMenu: value }),
}));

export default useNavbarStore;
