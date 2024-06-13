import { Field, Formik, Form } from "formik";
import { Button } from "react-bootstrap";
import Layout from "../../Layout/app/Layout";
import { LoadingButton } from "../../Components/Utils/Loading/LoadingButton";
import { getInitialValues, getValidationSchema } from "./formUtils";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { useGetProfile, useUpdateProfile } from "../../api/profile";
import TalabeeField from "../../Components/Utils/TalabeeField/TalabeeField";
import { useState } from "react";
import { GenderOption } from "../Auth/FormUtils";
import ChangePassModal from "./ChangePassModal";
import imageCompression from 'browser-image-compression';
import LoadingAntdNoLogo from "../../Components/Utils/Loading/LoadingAntdNoLogo";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/auth/AuthReducer";
import NotAuth from "../../Layout/app/NotAuth";


function Profile() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { data, isLoading } = useGetProfile({});
  const { mutate: updateProfile, isLoading: isUpdateLoading } = useUpdateProfile();
  const profileData = data?.data[0];
  const [gender, setGender] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector((state: any) => state.auth)

  const handleSubmit = (values: any) => {
    console.log(values);
    const { password, ...restOfValues } = values;
    const dataToSend = { ...restOfValues, gender, image: selectedImage };
    console.log({ ...dataToSend });
    updateProfile({ ...dataToSend });
  };

  const compressImage = async (image: any) => {
    const imageFile = image;

    const options = {
      maxSizeMB: 0.5,
      maxWidthOrHeight: 720,
      useWebWorker: true,
    }

    try {
      const compressedFile = await imageCompression(imageFile, options);
      setSelectedImage(compressedFile);
    } catch (error) {
      console.log(error);
    }
  }

  const handleCancel = () => {
    navigate('/');
  };

  const handleImageChange = (e: any) => {
    // setSelectedImage(e.target.files[0]);
    const file = e.target.files[0];
    compressImage(file);
  };


  return (
    <Layout>
      {
        isAuthenticated ?
          <div className="profile pt-5 pb-5">
            <h1 className="text-center mb-3">{t(`Edit your`)} <span>{t("Profile")}</span></h1>
            {
              isLoading ? <LoadingAntdNoLogo /> :
                <div className="profile_form" >
                  <Formik
                    initialValues={getInitialValues({ profileData })}
                    validationSchema={getValidationSchema()}
                    onSubmit={handleSubmit}
                  >
                    {(formik) => (
                      <Form >
                        <div className="login_dev name_and_image">
                          <div className="nam">
                            <TalabeeField name="first_name" placeholder={t('first_name')} />
                            <TalabeeField name="last_name" placeholder={t('last_name')} />
                          </div>
                          <div className="image_container">
                            <img src={selectedImage ? URL.createObjectURL(selectedImage) : profileData?.image} alt='logo' width={100} height={100} />
                            <label htmlFor="file-upload" className="change_image">
                              {t("Change Image")}
                            </label>
                            <input id="file-upload" type="file" accept="image/*" onChange={handleImageChange} />
                          </div>
                        </div>
                        <div className="login_dev">
                          <TalabeeField name="email" placeholder={t('Email')} />
                        </div>

                        <div className="login_dev">
                          <TalabeeField name="phone" placeholder={t('Phone')} />
                        </div>

                        <div className="login_dev password_dev">
                          <TalabeeField name="password" inputType="password" placeholder={t('password')} />
                          <button type="button" onClick={() => setIsModalOpen(true)}>{t("Change password")}</button>
                        </div>
                        <div className="login_dev one_row_dev">
                          <span className="birthday_elements">
                            <label htmlFor="birthday" className="birthday_label">{t("Birthday")}</label>
                            <Field id="birthday" name="birthday" className="birthday" type="date" value={formik.values.birthday} placeholder="Birthday" />
                          </span>

                          <TalabeeField type="Select" name="gender" className="gender-select" onChange={(gender) => setGender(gender)} option={GenderOption} placeholder="Gender" label="Gender" />
                        </div>
                        <div className="buttons">
                          <Button onClick={handleCancel} >{t("cancel")}</Button>
                          <LoadingButton isLoading={isUpdateLoading} type="submit">
                            {t("save")}
                          </LoadingButton>
                        </div>
                        {/* <Button className="logout-button" color="danger" onClick={handleLogout}>Logout</Button> */}
                      </Form>
                    )}
                  </Formik>
                </div>
            }
            {isModalOpen && <ChangePassModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />}
          </div>
          : // show a message that the user is not authenticated
          <NotAuth />
      }
    </Layout>
  )
}

export default Profile;
