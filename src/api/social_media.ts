import useGetQuery from "./helper/useGetQuery"

const API = {
    GET:"/api/social_media"
}


const KEY = 'SOCIAL_MEDIA'
export const useGetSocialMedia = ()=>useGetQuery(KEY , API.GET);