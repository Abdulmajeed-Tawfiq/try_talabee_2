import { useSelector } from "react-redux";
import useAddMutation from "./helper/useAddMutation";
import useGetQuery from "./helper/useGetQuery";

const API = {
    AddToCart:"/api/cart/add_product",
    GET:"/api/cart/details",
    CHECK : '/api/order/checkout',
    CREATE_PAYMENT:`/api/user/create_payment`,
    SINGLE_ORDER:"api/order/details",
    RemoveFromCart:"/api/cart/remove_product",
    UpdateCartCount:"/api/cart/change_quantity",
}

const  KEY = "CART"
const  KEY2 = "SINGLE_ORDER"

export const useAddToCart =  ()=>useAddMutation(KEY , API.AddToCart )
export const useGetCart =  ()=>{
    const {isAuthenticated} = useSelector((state:any)=>state.auth)
    
    return useGetQuery(KEY  , API.GET  ,{} , {
        enabled:isAuthenticated
    })
}

export const useCheckout = ()=>useAddMutation(KEY , API.CHECK)
export const useCreatePayment = ()=>useAddMutation(KEY , API.CREATE_PAYMENT)

export const useGetSingleOrder = (params :any)=>useGetQuery(KEY2 , API.SINGLE_ORDER , params) 

export const useRemoveFromCart = ()=>useAddMutation(KEY , API.RemoveFromCart) 

export const useUpdateCartCount = ()=>useAddMutation(KEY , API.UpdateCartCount)


