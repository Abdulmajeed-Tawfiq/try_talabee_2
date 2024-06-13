import Theme from '../Utils/Theme'
import Translate from '../Utils/Translate'
import { Link, useNavigate } from 'react-router-dom'
import { MenuFoldOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { BsFillPersonFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import ProfileModal from './ProfileModal'
import { useState } from 'react'

const TopBar = () => {

  // const { isAuthenticated } = useAuth()
  const { isAuthenticated } = useSelector((state: any) => state.auth)

  const { t } = useTranslation();
  const navigate = useNavigate();
  const [openProfile, setOpenProfile] = useState(false);

  return (

    <header className='Header'>
      <nav className='top_bar'>
        <div className="Menu_Group">
          <Theme />
          <Translate />
        </div>

        <Link to={'/'} >  <h1>TRY TALABEE</h1> </Link>

        <ul className='Media_Icon'>
          {
            isAuthenticated
              ? <div>
                <div className='Link' onClick={() => setOpenProfile(!openProfile)} >
                  <span className='header_text'>
                    <span>{t("user")} </span>
                    (<span>{t("role")}</span>)
                  </span>
                  <BsFillPersonFill />
                </div>
              </div>
              : <div className='Link' onClick={() => navigate("/auth")} >
                <span>Login</span>
                <BsFillPersonFill />
              </div>
          }
        </ul>

        <div className='MenuNav'>
          <MenuFoldOutlined />
        </div>
      </nav>
      {openProfile && <ProfileModal openProfile={openProfile} setOpenProfile={setOpenProfile} />}
    </header >
  )
}

export default TopBar