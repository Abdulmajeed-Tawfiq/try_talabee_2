import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { logout } from "../../Redux/auth/AuthReducer";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { FaRegEdit } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


function ProfileModal({ openProfile, setOpenProfile }: { openProfile: boolean, setOpenProfile: Function }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const logoutLabels = {
    confirm: t('Yes'),
    cancel: t('cancel'),
    message: t('Are you sure you want to logout?'),
    title: t('Logout'),
  }

  const handleLogout = () => {
    setOpenProfile(false)
    confirmAlert({
      title: logoutLabels.title,
      message: logoutLabels.message,
      buttons: [
        {
          label: logoutLabels.confirm,
          onClick: () => {
            dispatch(logout());
            navigate('/');
            toast.success(t('logged out successfully'));
          },
          className: 'btn btn-danger yes-btn'
        },
        {
          label: logoutLabels.cancel,
          // onClick: () => setOpenProfile(false),
          className: 'btn btn-danger cancel-btn'
        }
      ],
      closeOnEscape: true,
      closeOnClickOutside: true,
    });

  };

  return (
    <div className="profile_modal">
      <Button className="first_button" onClick={() => navigate("/profile")} >
        <p>{t("edit profile")}</p>
        <FaRegEdit />
      </Button>
      <hr />
      <Button color="danger" onClick={handleLogout} >
        <p>{t("Logout")}</p>
        <FiLogOut />
      </Button>
    </div>
  )
}

export default ProfileModal