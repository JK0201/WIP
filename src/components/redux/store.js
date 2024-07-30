import { configureStore } from '@reduxjs/toolkit';
import { pageSlice } from './pageSlice';
import { characterSlice } from './characterSlice';

export const store = configureStore({
    reducer: {
        page: pageSlice.reducer,
        character: characterSlice.reducer
    },
});
