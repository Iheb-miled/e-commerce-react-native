import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import productReducer from '../features/Product/ProductSlice'
const Store = configureStore({
    reducer: {
        products: productReducer,
    }
})

export default Store;
export type RootState = ReturnType<typeof Store.getState> //(na5thou les etat)
export type AddDispatch = typeof Store.dispatch; // disptach les action ( lancer les action)

export const useAppDispatch = () => useDispatch<AddDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;