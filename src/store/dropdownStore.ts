import { create } from 'zustand';

interface DropdownStore {
  openDropdownId: number | null;
  setOpenDropdownId: (id: number | null) => void;
}

export const dropdownStore = create<DropdownStore>(set => ({
  openDropdownId: null,
  setOpenDropdownId: id => set({ openDropdownId: id }),
}));
