import useGetQuery from "./helper/useGetQuery"

const API = {
    GET: "/api/categories/",
}

const KEY = "Categories"

export const useGetSingleCategory = (params?: any) => useGetQuery(KEY, `${API.GET}${params}`)
