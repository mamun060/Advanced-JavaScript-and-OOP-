const products = [
    {
        id: 1,
        name: 'Product 1',
        price: 10.00,
      },
      {
        id: 2,
        name: 'Product 2',
        price: 15.00,
      },
      {
        id: 3,
        name: 'Product 3',
        price: 20.00,
      },
      {
        id: 4,
        name: 'Product 4',
        price: 25.00,
      },
]

const findProduct = products.map((data)=>{
    return data.id;

})

console.log(products[0].price, findProduct[0] );