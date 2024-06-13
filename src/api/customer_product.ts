import useAddMutation from "./helper/useAddMutation";

const API = {    
    Add:"api/customer_product",
}

const KEY = "customer"




export const useAddProduct = ()=> useAddMutation(KEY , API.Add)