import useGetQuery from "./helper/useGetQuery"

const API = {
    GET: "/api/order/all",
}

const KEY = "ORDERS"

export const useGetAllOrders = (params?: any) => useGetQuery(KEY, API.GET, params)


