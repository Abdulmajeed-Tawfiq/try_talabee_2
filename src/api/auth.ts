import useAddMutation from "./helper/useAddMutation"

const API = {
    login: "api/login",
    register: "api/register",
    verify: `api/verify-code/`,
    reSendCode: `api/resend-verification-code/`,

}

const KEY = "AUTH"

export const useLogin = () => useAddMutation(KEY, API.login)
export const useRegister = () => useAddMutation(KEY, API.register)

export const useVerify = (params: any) => useAddMutation(KEY, `${API.verify}${params}`)
export const useSendCode = (params: any) => useAddMutation(KEY, `${API.reSendCode}${params}`)

