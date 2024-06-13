////  first section of cart page contain user products  ////


import CartItem from './CartItem'
import CheckoutForm from './CheckoutForm';
import CartEmpty from './CartEmpty';
import { cartItems } from '../../Backend/Cart';


const CartBody = ({ data, cart, setViewPage }: any) => {

  return (
    <div className="CartBody">
      {cartItems?.length === 0 ? (
        <CartEmpty />)
        : (
          <>
            <div className='left' >
              {cartItems?.map((item: any, index: number) => (
                <>
                  <div className="CartBody_Left" key={index}>
                    <CartItem item={item} />
                  </div>
                </>
              ))}
            </div>

            <div className="CartBody_Right">
              <CheckoutForm sub_total={1050} setViewPage={setViewPage} delivery_fees={100} />
            </div>
          </>
        )
      }
    </div>
  );
};
export default CartBody



