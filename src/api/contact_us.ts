import useAddMutation from "./helper/useAddMutation";

const API = {    
    Send:"api/contact-us/send_message",
}

const KEY = "MESSAGE"


export const useSendMessage = ()=> useAddMutation(KEY , API.Send)