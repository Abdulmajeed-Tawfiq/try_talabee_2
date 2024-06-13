import { useQuery } from 'react-query';
import useAxios from './useAxios';
import { useNavigate, useParams } from 'react-router-dom';
import { logout } from '../../Redux/auth/AuthReducer';

function useGetOneQuery(key: string, url: string, params: any = {}, options: any = {}) {
  const axios = useAxios();
  const language = localStorage.getItem("language") ?? "en"
  const navigate = useNavigate()
  const { id } = useParams()

  return useQuery(
    [id, key, language],
    async () => {
      const response = await axios.get(url + "/" + id + `?lang=${language}`);
      return response.data;
    },


    {
      onError: (error: any) => {
        if (error?.response?.status == 401 || error?.response?.status == 403) {
          logout()
          navigate("/auth")

        }

      },
      cacheTime: 0, // Set cacheTime to 0 to disable caching
      refetchOnWindowFocus: false,

      ...options

    }
  );
}

export default useGetOneQuery;
