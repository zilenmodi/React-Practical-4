import * as redux from '@reduxjs/toolkit'
import usersReducer from './UsersSlice/UsersSlice.js'
import userReducer from './UserSlice/UserSlice.js'

const store = redux.configureStore({
    reducer: {
        users: usersReducer,
        user: userReducer
    },
})

export default store