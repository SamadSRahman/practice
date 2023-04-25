import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:[{
    
            name: 'Btn 1',
            count: 0
        }
        ]
    }

export const tableSlice = createSlice({
 
    name: "table",
    initialState,
    reducers: {
        addBtn: (state, action) => {
            const index = action.payload
            state.value[index].count += 1;
        }
    }
})

export const { addBtn } = tableSlice.actions;

export default tableSlice.reducer;