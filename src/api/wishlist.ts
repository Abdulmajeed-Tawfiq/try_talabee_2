import { useSelector } from "react-redux";
import useAddMutation from "./helper/useAddMutation";
import useGetQuery from "./helper/useGetQuery";
const API = {
    GETStores: "api/favorites/stores",
    GETProducts: "api/favorites/products",
    AddToFav: "api/wishlist/add_product",
    RemoveFromFav: "api/wishlist/remove_product",
}

const KEY = "WISHLIST"

export const useAddToFavourite = () => useAddMutation(KEY, API.AddToFav)

export const useGetFavStores = () => {
    const { isAuthenticated } = useSelector((state: any) => state.auth)

    return useGetQuery(KEY, API.GETStores, {}, {
        enabled: isAuthenticated
        // An options object that specifies that the query should only be enabled when the user is authenticated 
    })
}

export const useGetFavProducts = () => {
    const { isAuthenticated } = useSelector((state: any) => state.auth)

    return useGetQuery(KEY, API.GETProducts, {}, {
        enabled: isAuthenticated
        // An options object that specifies that the query should only be enabled when the user is authenticated 
    })
}


export const useRemoveFromFav = () => useAddMutation(KEY, API.RemoveFromFav)

