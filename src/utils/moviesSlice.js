import { createSlice } from "@reduxjs/toolkit"

const movieSlice = createSlice({
    name : "movies",
    initialState : {
        nowplayingMovies : null
    },
    reducers :{
        addNowPlayingMovies : (state , action) => {
            state.nowplayingMovies = action.payload;
        }
    },
});

export const {addNowPlayingMovies} = movieSlice.actions;

export default movieSlice.reducer;