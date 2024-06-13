
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TCardStore } from '../../Layout/app/Types';

interface StroeState {
    value: TCardStore
}

const initialState: StroeState = {
    value: [
        {
            id: 0,
            reviews_avg_rating: 0,
            name: "",
            image: "",
            description: ""
        }
    ],
}

export const StoreSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {
        setStoreData: (state, action: PayloadAction<TCardStore>) => {
            return {
                ...state,
                value: action.payload,
            };
        },
    },
})

export const { setStoreData } = StoreSlice.actions

export default StoreSlice.reducer