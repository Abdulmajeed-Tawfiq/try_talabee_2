import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { THeroAd, TbannerData } from '../../Layout/app/Types';

interface heroSectionState {
  value: {
    bannerData: TbannerData[];
    adData: THeroAd[];
  };
}

const initialState: heroSectionState = {
  value: {
    bannerData: [],
    adData: [],
  },
};

export const heroSectionSlice = createSlice({
  name: 'heroSection',
  initialState,
  reducers: {
    setHeroSectionData: (state, action: PayloadAction<heroSectionState>) => {
      return {
        value: {
          ...state.value,
          bannerData: action.payload.value.bannerData,
          adData: action.payload.value.adData,
        },
      };
    },
  },
});

export const { setHeroSectionData } = heroSectionSlice.actions;

export default heroSectionSlice.reducer;
