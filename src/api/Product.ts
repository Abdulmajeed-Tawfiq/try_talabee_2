import useGetQuery from "./helper/useGetQuery"
import useGetQueryPagination from "./helper/useGetQueryPagination"

const API = {
    GET: "/api/user/product/getAll",
    GETONE: "/api/products/",
}

const KEY = "PRODUCT"
const KEY2 = "PRODUCT2"

export const useGetAllProduct = (params?: any) => useGetQuery(KEY, API.GET, params)
export const useGetAllProductWithPaginations = () => useGetQueryPagination(KEY, API.GET);

export const useGetSingleProduct = (params?: any) => useGetQuery(KEY, `${API.GETONE} ${params}`)

export const useGetAllProductWithSearch = () => useGetQueryPagination(KEY2, API.GET);

