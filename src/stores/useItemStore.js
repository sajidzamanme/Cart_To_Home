import { create } from "zustand";

const useItemStore = create((set) => ({
  items: [],
  setItems: (newItems) => set({ items: newItems }),
}));

export default useItemStore;