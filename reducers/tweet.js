import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: '',
}

export const tweetSlice = createSlice({
    name: 'tweet',
    initialState,
    reducers: {
        addNewTweet: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {addNewTweet} = tweetSlice.actions;
export default tweetSlice.reducer;