// import redux toolkit methods here
const { createSlice } = require("@reduxjs/toolkit");


const INITIAL_STATE = { comments: [], isLoading: false, error: null };

// define comments reducer function here
const commentSlice = createSlice({
    name: "comment",
    initialState: INITIAL_STATE,
    reducers:{
        pending:(state, action) =>{
            state.isLoading = true
         },
         fulfilled:(state, action)=>{
            state.isLoading = false,
            state.comments = action.payload
         },
         rejected:(state,action)=>{
            state.isLoading = false,
            state.error = "failed to fetch comments."
         }
    }
})

// export the comments reducer function and action creators here
export const commentReducer = commentSlice.reducer;

export const commentAction = commentSlice.actions;

// export the comments selector function here
export const commentSelector = (state)=> state.commentReducer;
