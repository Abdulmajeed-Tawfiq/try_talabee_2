import React from "react";
import { Badge } from "reactstrap";
import { useTranslation } from "react-i18next";
import { OrderStatusEnum } from "../../enums/OrderStatus";

const OrderStatus = ({ order_status = OrderStatusEnum.PENDDING }:{order_status?:OrderStatusEnum}) => {
    const {t} = useTranslation();
    const all={
        pending:{color:"secondary"},
        accepted:{color:"success"},
        delivering:{color:"primary"},
        delivered:{color:"success"},
        canceled:{color:"danger"}
    }

  return (
    <h3 style={{display:"inline"}}>
      <Badge color={all[order_status].color} >
        {t(order_status)}
      </Badge>
    </h3>
        
  );
};


export default OrderStatus;
