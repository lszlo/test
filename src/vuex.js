import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      slider: {
        val: 1,
      },
      settings: {
        sliderVal: 1,
        display: "none",
        language: "english",
      },
      icons:{
        previewIndex:0,
        page:1,
        caches:{}
      },
      emotes:{
        previewIndex:0,
        page:1,
        caches:{}
      }
    };
  },
  mutations: {
    changeSliderVal(state, val) {
      if (val >= 1 && val <= 6) {
        state.slider.val = val;
      }
    },
    toggleSettings(state) {
      state.settings.display = state.settings.display === "none" ? "block" : "none";
    }
  },
});
