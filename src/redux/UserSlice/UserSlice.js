// // UserSlice.js
import * as redux from '@reduxjs/toolkit'

const userSlice = redux.createSlice({
    name: 'posts',
    initialState: { data: [], status: 'idle' },
    reducers: {
        hoveredUser: (state,action) => {
            state.data = action.payload
            state.status = 'succeeded'
        },
        unHoveredUser: (state) => {
            state.status = 'idle'
        }
    },
});

export default userSlice.reducer;
export const {hoveredUser,unHoveredUser} = userSlice.actions
