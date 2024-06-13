import { ReactNode } from "react";

export type Tchildren = {
  children: ReactNode
}


export interface MenuItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
}

export type TProduct = {
  id: number,
  reviews_avg_rating: number,
  name: string,
  images: [{
    id: number,
    image: string
  }],
  description: string,
  price: number,
  quantity: number
}

export type TCardProduct = {
  id: number,
  reviews_avg_rating: number,
  name: string,
  images: [{
    id: number,
    image: string
  }],
  description: string,
  price: number,
  quantity: number
}

export type TCategory = {
  id: number,
  name: string,
  icon: string,
}

export type TStore = {
  id: number,
  reviews_avg_rating: number,
  name: string,
  image: string,
  description: string
}

export type TCardStore = [
  {
    id: number,
    reviews_avg_rating: number,
    name: string,
    image: string,
    description: string
  }
]

export type TSubTitle = {
  name: string,
  href: string,
  icon: any
}


export type TBigAdsData = {
  header: string,
  img: string,
  mainText: string,
  textPrice: string,
  Price: string,
  color: string
}

export type TbannerData = {
  id: number,
  image: string
}


export type THeroAd = {
  imageUrl: string;
  title: string;
  subtitle: string;
  discount: string;
  link: string;
  btn: string;
}


export type TSpecialProperty = {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export type TMovesAdsData = { LeftText: string; RightText: string; Link: string; }
