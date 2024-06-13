import axios from 'axios'
import { BaseURL } from '../config'
import { TOKEN_KEY } from '../../config/AppKey'
function useAxios() {

  return (
    axios.create({
        baseURL:BaseURL,
        headers:{
          Authorization:"Bearer " + localStorage.getItem(TOKEN_KEY),
          'language' : localStorage.getItem('language') 
        }
    })
  )
}

export default useAxios

