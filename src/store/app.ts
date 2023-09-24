// Utilities
import { IUser } from "@/types/user.interface";
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    user: {} as IUser,
    history: [] as any[],
  }),
  actions: {
    onAddState(data: { user: IUser; matchs: any[] }) {

      this.user = data.user;
      this.history = data.matchs;
      console.log(this.history);
    },
  },
});
