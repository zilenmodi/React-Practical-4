// // UserSlice.js
import * as redux from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchUsers = redux.createAsyncThunk('users/fetchUsers', async () => {
    const response1 = await axios.get('https://reqres.in/api/users?page=1');
    const response2 = await axios.get('https://reqres.in/api/users?page=2');
    return [...response1.data.data, ...response2.data.data];
});

const usersSlice = redux.createSlice({
    name: 'posts',
    initialState: { data: [], status: 'idle', error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default usersSlice.reducer;
