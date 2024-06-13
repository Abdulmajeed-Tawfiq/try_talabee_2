import React from 'react'
import { UserImageURLProduct , UserImageURLStore } from '../Layout/app/Const';

export const useImageErrorProduct = ({currentTarget}:any) => {
    currentTarget.onerror = null;
    currentTarget.src=`${UserImageURLProduct}`;
}

export const useImageErrorStore = ({currentTarget}:any) => {
    currentTarget.onerror = null;
    currentTarget.src=`${UserImageURLStore}`;
}
