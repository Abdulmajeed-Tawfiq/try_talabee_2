import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: `api/profile/user`,
  UPDATE: `api/profile/update`,
  CHANGE_PASSOWRD: `api/profile/change-password`
}
const KEY = "PROFILE"

export const useGetProfile = (params: any) => useGetQuery(KEY, API.GET, params);
export const useUpdateProfile = () => useUpdateMutation(KEY, API.UPDATE);
export const useChangePassword = () => useUpdateMutation(KEY, API.CHANGE_PASSOWRD);
