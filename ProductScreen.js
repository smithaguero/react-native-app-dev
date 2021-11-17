import React from 'react';


const PRODUCTS = [
    {
        id: 10,
        name: 'Nike Mens Sportswear T-Shirt',
        price: 80,
        image:  'https://i.pinimg.com/originals/1f/56/56/1f5656c7f84087e461a6bc991bef3b01.jpg',
        description: 'Nike mens sport wear for any kind of workouts and occasion'
    },
    {
        id: 11,
        name: ' React native Unisex Half Sleeve T-Shirt',
        price: 100,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWJsu-2-jNTbh2QMjHc01IGYwo1V2SQeOn3Q&usqp=CAU',
        description: 'React native unisex half sleeve T-shirt for any kind of occasion'
    },
    {
        id: 12,
        name: 'SweetHome Cupcake',
        price: 5000,
        image: 'https://cdn.vox-cdn.com/thumbor/Vgy3FfpWvBD32CYZrcNq6itGqnw=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/20034840/ishMfuW.png',
        description: 'A gaming console that suits your gaming needs'
    }
  ];
  
  export function getProducts() {
    return PRODUCTS;
  }
  export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
  }
  
  