import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: true,
}

export const tweetSlice = createSlice({
    name: 'tweet',
    initialState,
    reducers: {
        addNewTweet: (state, action) => {
            state.value = !state.value
        },

        
    }
})

export const {addNewTweet} = tweetSlice.actions;
export default tweetSlice.reducer;