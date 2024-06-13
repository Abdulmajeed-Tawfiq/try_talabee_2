import React from 'react'
import { Badge, Tooltip } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
// import { useCartData } from '../../Redux/DispatchData'
import { useTranslation } from 'react-i18next'

const ViewCart = () => {
  
  const count = 2
  const {t} = useTranslation();
  const navigate = useNavigate() 

  return (
    <div className='ViewCart'>
        <Badge className='Badge_Button' count={count} >
            <div className="Cart_Icon"  onClick={()=>navigate('/cart')}>
              <Tooltip title={t("cart")}>
                <ShoppingCartOutlined />
              </Tooltip>
            </div>
        </Badge>
  </div>
  )
}

export default ViewCart