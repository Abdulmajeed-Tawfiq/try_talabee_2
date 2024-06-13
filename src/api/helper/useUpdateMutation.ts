import { useQueryClient, useMutation, UseMutationResult } from "react-query";
import { toast } from "react-toastify";
import useAxios from "./useAxios";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

type AxiosResponse = {
  message: string;
  // Add other properties as needed
};

const useUpdateMutation = (
  key: string,
  url: string,
  // toastMessage: boolean,
  method?: string
): UseMutationResult<AxiosResponse, unknown, unknown> => {
  const axios = useAxios();
  const queryClient = useQueryClient();
  const [t] = useTranslation();
  const { id } = useParams()

  return useMutation<AxiosResponse, unknown, unknown>(
    async (dataToSend) => {
      if (method === "put") {
        const { data } = await axios.put(url + "/" + id, dataToSend);
        return data;
      } else {
        const { data } = await axios.post(url , dataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        return data;
      }



    },
    {
      onSuccess: (data) => {
        toast.success(data.message || t("updated_successfully"));
      
        queryClient.invalidateQueries([key]);
    },
    onError: (err: any) => {
      const message = err?.response?.data?.message || t("failed_to_update_data");
      toast.error(message);


      // validateSession(err.response);
    },
    }
  );
};

export default useUpdateMutation;
