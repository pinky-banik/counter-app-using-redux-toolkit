import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = createAsyncThunk("posts/fetchPosts",async()=>{
    const res = await axios.get(API_URL);
    return res.data;
})

const postSlice = createSlice({
    name :'posts',
    initialState:{
        isLoading :false,
        posts:[],
        error :null,
    },
    extraReducers:(builder)=>{ //using middleware we need this
        builder.addCase(fetchPosts.pending,(state)=>{state.isLoading=true});
        builder.addCase(fetchPosts.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.posts=action.payload;
        state.error= null;
        });
        builder.addCase(fetchPosts.rejected,(state,action)=>
        {
            state.isLoading=true;
            state.posts=[];
            state.error = action.error.message;
        }
        );
    }
});

export default postSlice.reducer;