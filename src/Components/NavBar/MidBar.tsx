import InputAutoComplete from './InputAutoComplete'
import { Link, useNavigate } from 'react-router-dom';
import ViewCart from './ViewCart';
import {MenuOutlined} from '@ant-design/icons';
import WithDrawer from '../../HighOrderComponent/WithDrawer';
import { Button, Divider, Tooltip } from 'antd';
import Theme from '../Utils/Theme';
import Translate from '../Utils/Translate';
import DropdownMenu from '../Ui/DropdownMenu';
import { useTranslation } from 'react-i18next';
import { FaRegHeart } from "react-icons/fa6";
import { TbPointFilled } from "react-icons/tb";

const MidBar = () => {
  const navigate = useNavigate()
  const {t} = useTranslation();


  return (
    <div className="MidBar">

        <div className='MidBar_Left'>  
          <div className='logo_contianer'>
            <Link className='logo' to="/">
              <img src='/Logo/Talabee2.png' alt='logo' width={200}/>
            </Link>
          </div>
        </div>

        <div className='MidBar_Mid'>
            <InputAutoComplete/>
        </div>

        <div className='MidBar_Right'>
          <div className='Top_Section_Right'>
              <div className="Cart_Icon"  onClick={()=>navigate('/favourite')}>
                <Tooltip title={t("favourite")}>
                  <FaRegHeart />
                </Tooltip>
              </div>
            </div>
            <ViewCart/>
        </div>
        <div className='MediaMenu'> 
        <ViewCart/>
        {/* display on small width */}
        <WithDrawer
              title=''
              button={<Button icon={<MenuOutlined />} className='MenuButton' type='primary' />}
            >
            <div className="Menu_anv">
              <div className='logo_drawer_container'>
                <div className='m-auto'>
                  <img src='/Logo/Talabee2.png' alt='logo' width={200}/>
                </div>
              </div>

              <Divider/>

              <span className='Link_NavMenu translate'><h1><span></span><Theme/></h1></span>
              <span className='Link_NavMenu translate'><h1><span><TbPointFilled/></span><Translate/></h1></span>
              <Link className='Link_NavMenu' to={'/'} >  <h1><span><TbPointFilled/></span> {t("Home")}</h1> </Link>
              <Link className='Link_NavMenu' to={'/about'} >  <h1><span><TbPointFilled/></span>  {t("about")}</h1> </Link>
              <Link className='Link_NavMenu' to={'/contact'} >  <h1><span><TbPointFilled/></span> {t("contact")}</h1> </Link>
              <Link className='Link_NavMenu' to={'/joinFamily'} >  <h1><span><TbPointFilled/></span> {t("joinFamily")}</h1> </Link>
              <Link className='Link_NavMenu' to={'/products'} >  <h1><span><TbPointFilled/></span> {t("Products")}</h1> </Link>
              <Link className='Link_NavMenu' to={'/stores'} >  <h1><span><TbPointFilled/></span> {t("stores")}</h1> </Link>
              <Link className='Link_NavMenu' to={'/orders'} >  <h1><span><TbPointFilled/></span> {t("orders")}</h1> </Link>
              <Link className='Link_NavMenu' to={'/privacy'} >  <h1><span><TbPointFilled/></span> {t("Privacy")}</h1> </Link>
              <Link className='Link_NavMenu' to={'/favourite'} >  <h1><span><TbPointFilled/></span> {t("favourite")}</h1> </Link>

            </div>

            <Divider/>
            <div style={{display: "flex" , justifyContent: "center"}} className='pb-5'>
            <DropdownMenu />
            </div>

        </WithDrawer>

      </div>
    </div>
  )
}

export default MidBar