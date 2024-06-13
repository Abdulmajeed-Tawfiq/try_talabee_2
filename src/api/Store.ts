import useGetQuery from "./helper/useGetQuery"

const API = {
    GET: "/api/stores/"
}

const KEY = "STORE"

// export const useGetSingleStore = (params?:any) => useGetQuery(KEY , API.GET, params)
export const useGetSingleStore = (params?: any) => useGetQuery(KEY, `${API.GET}${params}`)
export const useGetStores = () => useGetQuery(KEY, API.GET)
