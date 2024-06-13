import DropdownMenu from '../Ui/DropdownMenu'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { LinksArray, LinksArrayProps } from './LinkArray';

const BottomBar = () => {

  const { t, i18n } = useTranslation();
  const path = useLocation()

  return (
    <div className="BottomBar">
      {path?.pathname !== '/Products' && i18n.language === 'en' && <DropdownMenu />}
      <div className='NavMenus'>
        {LinksArray?.map((link: LinksArrayProps) => {
          return (
            <Link className={path?.pathname == link?.className ? 'Glow_link Link' : 'Link'} to={link.toLink} ><h1>{t(link.text)}</h1></Link>
          )
        })}
      </div>
      {path?.pathname !== '/Products' && i18n.language === 'ar' && <DropdownMenu />}
    </div>
  )
}

export default BottomBar