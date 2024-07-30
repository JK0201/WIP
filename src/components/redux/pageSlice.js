import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menu: false,
  sound: false,
  animateSection: 0,
  section: 0,
  portfolioAnimation: false,
};

export const pageSlice = createSlice({
  name: 'page',
  initialState: initialState,
  reducers: {
    setMenu(state) {
      state.menu = !state.menu;
    },

    setSound(state) {
      state.sound = !state.sound;
    },

    closeMenu(state, action) {
      state.menu = action.payload;
    },

    setAnimateSection(state, action) {
      state.animateSection = action.payload;
    },

    setSection(state, action) {
      state.section = action.payload;
    },

    setPortfolioAnimation(state, action) {
      state.projectAnimation = action.payload;
    },
  },
});

export const { setMenu, setSound, closeMenu, setAnimateSection, setSection, setPortfolioAnimation } = pageSlice.actions;
