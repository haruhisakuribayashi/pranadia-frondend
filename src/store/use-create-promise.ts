import { create } from "zustand";
import CreatePromiseInterface from "@/types/interfaces/store/create-promise";
import PromiseType from "@/types/store/promise-type";

const useCreatePromise = create<CreatePromiseInterface>((set) => ({
  promise: undefined,
  addPromise: (newPromise: PromiseType) => set({ promise: newPromise }),
}));

export default useCreatePromise;
