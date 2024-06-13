
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TCardProduct } from '../../Layout/app/Types';

interface ProductState {
  value: TCardProduct
}

const initialState: ProductState = {
  value: {
    id: 0,
    reviews_avg_rating: 0,
    name: "",
    images: [{
      id: 1,
      image: ""
    }],
    description: "",
    price: 0,
    quantity: 0
  },
}

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductData: (state, action: PayloadAction<TCardProduct>) => {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
})

export const { setProductData } = ProductSlice.actions

export default ProductSlice.reducer