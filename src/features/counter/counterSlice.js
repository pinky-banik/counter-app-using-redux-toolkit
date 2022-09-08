const { createSlice } = require("@reduxjs/toolkit");



export const counterSlice = createSlice({
    name: "counter",
    initialState:{count:0},
    reducers :{
        increment: (state)=>{
            state.count = state.count +1
        },
        decrement : (state) =>{
            state.count = state.count -1;
        },
        reset : (state) =>{
            state.count = 0;
        },
        increseByAmount : (state,action) =>{
            state.count = state.count + action.payload;
        }
    }
});

export const {increment,decrement,reset,increseByAmount} = counterSlice.actions;

export default counterSlice.reducer;