import {createSlice} from "@reduxjs/toolkit";

const init = {
    value : 0,
}

const addReducer = createSlice({
    name : 'addReducer',
    initialState : init,
    reducers : {
        add : (state)=>{
            state.value ++
        },
        rem : (state)=>{
            state.value --
        }
    }
})

export const{add,rem} = addReducer.actions
export default addReducer.reducer