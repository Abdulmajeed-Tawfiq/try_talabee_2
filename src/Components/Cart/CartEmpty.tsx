import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const CartEmpty = () => {
  const { t } = useTranslation();
  const navigate = useNavigate()

  return (
    <div className='CartBody_empty'>
      <p className='EmptyCart_text'>{t("Sorry, your cart is")} <span>{t("empty")}</span>...</p>
      {/* <span className='Empty_icon'><BsEmojiFrownFill/></span> */}
      <button onClick={() => navigate('/')}>Buy some products</button>
    </div>
  )
}

export default CartEmpty