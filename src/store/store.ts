import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import bookstoreReducer from '../slices/bookstoreSlice'

const store =  configureStore({
    reducer: {
        bookstore: bookstoreReducer
    }

})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export default store