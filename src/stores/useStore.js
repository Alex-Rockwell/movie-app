import { defineStore } from "pinia";

export const useTheme = defineStore({
  id: "theme",
  state: () => ({
    mode: "light",
  }),
  actions: {
    toggle() {
      this.mode = this.mode === "light" ? "dark" : "light";
    },
    keyPress(e) {
      if (e.key === "t") {
        this.toggle();
      }
    },
  },
});
