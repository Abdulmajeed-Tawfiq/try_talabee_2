import useGetQuery from "./helper/useGetQuery"

const API = {
    GET:"/api/user/category/getAll",
}

const KEY = "Categories"

export const useGetAllCategories = (params?:any) => useGetQuery(KEY , API.GET, params)
