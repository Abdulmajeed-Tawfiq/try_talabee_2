
import * as Yup from "yup";
import { buildFormData } from "../../api/helper/buildFormData";

interface formUtilCommon {
    first_name:string,
    description:string,
    des:string

}



 interface InitialValues  {

}
interface ValidateSchema  extends formUtilCommon{

}

export const getInitialValues = (objectToEdit: any | null = null): InitialValues => {


  return {
    type:1
  }
};

export const getValidationSchema = (editMode: boolean = false): Yup.Schema<ValidateSchema> => {
    // validate input  
  return Yup.object().shape({
    first_name:Yup.string().required("required"),
    description:Yup.string().required("required"),
    des:Yup.string().required("required"),
    

  });
};

export const getDataToSend = (values: any): FormData => {
  const data = { ...values };
  
  
  if(typeof data['image_name'] == 'string'){
    delete data['image_name']
  }
  const formData = new FormData();
  buildFormData(formData, data);
  return formData;
};

