import { Button, Upload, UploadFile } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const File = ({  label,set }: any) => {
  const {t} = useTranslation();
  const imageUrl =  '';

  const fileList: UploadFile[] = [
    {
      uid: '-1',
      name: '',
      status: 'done',
      url: imageUrl,
      thumbUrl: imageUrl,
    }
  ];

  const FilehandleChange = (value:any) => {
    set(value?.file?.originFileObj)
  };
  const customRequest = async ({ onSuccess}: any) => {
    onSuccess();
  };

  return (
    <div className="TalabeeField">
      <label htmlFor={label} className="text" >
        {(`${label}`)}
      </label>

      <Upload
        listType="picture"
        maxCount={1}
        className='w-100 upload_file' 
        defaultFileList={[...fileList]}
        onChange={ FilehandleChange}
        customRequest={customRequest}
      >
        <Button className='w-100 partner_image'  icon={<UploadOutlined  />}>{t("upload_image")}</Button>
      </Upload>

    </div>
  )
}

export default File