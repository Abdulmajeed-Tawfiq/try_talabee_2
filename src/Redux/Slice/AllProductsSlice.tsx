
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TProduct } from '../../Layout/app/Types';

interface TAllProductSlice {
    value: TProduct[] | []
}

const initialState: TAllProductSlice = {
    value: [],
}

export const AllProductSlice = createSlice({
    name: 'AllProduct',
    initialState,
    reducers: {
        setAllProduct: (state, action: PayloadAction<TProduct[]>) => {
            return {
                ...state,
                value: action.payload,
            };
        },
    },
})

export const { setAllProduct } = AllProductSlice.actions

export default AllProductSlice.reducer