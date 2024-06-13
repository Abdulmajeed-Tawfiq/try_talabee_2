  export const delivery_fees = 5;
  export const sub_total = 50;

 export const cartItems = [
    {
      id: 1,
      product: {
        id: 1,
        product_price: 25,
        product_main_image: '/Categories/cat1.jpg',
        product_translations: [{ name: 'Product 1' }],
        category: {
          category_image: '/Categories/cat1.jpg',
          category_translations: [{ name: 'Category 1' }],
        },
      },
      quantity: 2,
    },
    {
      id: 2,
      product: {
        id: 2,
        product_price: 30,
        product_main_image: 'image2.jpg',
        product_translations: [{ name: 'Product 2' }],
        category: {
          category_image: 'category2.jpg',
          category_translations: [{ name: 'Category 2' }],
        },
      },
      quantity: 1,
    },
  ];