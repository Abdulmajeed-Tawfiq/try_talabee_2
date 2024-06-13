export const OrderData  = [
    {
        id:'1',
        order_code:"1321",
        order_total:"150",
        payment_status:"Cash on delivery",
        order_status:"delivered"
    },
    {
        id:'2',
        order_code:"1421",
        order_total:"150",
        payment_status:"Cash on delivery",
        order_status:"delivered"
    },
    {
        id:'3',
        order_code:"1521",
        order_total:"150",
        payment_status:"Cash on delivery",
        order_status:"delivered"
    },
    {
        id:'4',
        order_code:"1621",
        order_total:"150",
        payment_status:"Cash on delivery",
        order_status:"delivered"
    },
]


export const fakeOrder = {
    order_id: "123456",
    user: {
      name: "John Doe"
    },
    order_status: "Delivered",
    order_code: "ORD123456",
    items: [
      {
        product_main_image: "https://example.com/product1.jpg",
        product_translations: [{ name: "Product 1" }],
        product_quantity: 2,
        product_price: "$10"
      },
      {
        product_main_image: "https://example.com/product2.jpg",
        product_translations: [{ name: "Product 2" }],
        product_quantity: 1,
        product_price: "$20"
      }
    ],
    order_total: "$30",
    created_at: "2024-03-25",
    payment_method: "Credit Card"
  };
  
  const fakeData = {
    data: {
      data: fakeOrder
    }
  };
  
