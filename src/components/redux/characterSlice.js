import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    animation: 'Leaning',
};

export const characterSlice = createSlice({
    name: 'character',
    initialState: initialState,
    reducers: {
        setAnimation(state, action) {
            state.animation = action.payload;
        },
    },
});

export const { setAnimation } = characterSlice.actions;
