
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TProduct } from '../../Layout/app/Types'

interface CartState {
    value: TProduct[] | []
    count : number
}

const initialState: CartState = {
    value:[],
    count: 2,
}

export const CartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: { 
        setCartData: (state:any, action: PayloadAction<TProduct[]>) => {
            return {
                ...state,
                value: action.payload,
            };
        },
    },
})

export const { setCartData } = CartSlice.actions

export default CartSlice.reducer