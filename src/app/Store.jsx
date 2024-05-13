import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import userReducer from '../features/counter/userSlice'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
    },
})

export default store