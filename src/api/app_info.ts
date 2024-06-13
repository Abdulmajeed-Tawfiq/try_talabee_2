import useGetQuery from "./helper/useGetQuery"

const API = {
    aboutus :"/api/about-us"
}


export const useGetAboutUs = (params:any={})=>useGetQuery("ABOUTUS" , API.aboutus , params)