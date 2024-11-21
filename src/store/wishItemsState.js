import {atom} from 'recoil'

const userWishlistAtom = atom({
    key:'userWishlistAtom',
    default:[
        {
          id: 1,
          name: "Wireless Bluetooth Headphones",
          description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
          price: 89.99,
          imageUrl: "images/headphones.jpeg",
          imageAltUrl: "https://via.placeholder.com/200x200?text=Headphones",
        },
        {
          id: 2,
          name: "Modern Wooden Coffee Table",
          description: "Sleek and stylish coffee table made from premium oak wood.",
          price: 199.99,
          imageUrl: "images/coffee-table.jpeg",
          imageAltUrl: "https://via.placeholder.com/200x200?text=Coffee+Table",
        },
        {
          id: 3,
          name: "Running Shoes for Men",
          description: "Comfortable and durable running shoes with excellent grip and cushioning.",
          price: 69.99,
          imageUrl: "images/shoes.jpeg",
          imageAltUrl: "https://via.placeholder.com/200x200?text=Running+Shoes",
        },
        {
          id: 4,
          name: "4K Ultra HD Smart TV",
          description: "55-inch Smart TV with 4K resolution, HDR support, and built-in streaming apps.",
          price: 499.99,
          imageUrl: "images/tv.jpeg",
          imageAltUrl: "https://via.placeholder.com/200x200?text=Smart+TV",
        },
        {
          id: 5,
          name: "Leather Office Chair",
          description: "Ergonomic office chair with adjustable height and comfortable leather upholstery.",
          price: 149.99,
          imageUrl: "images/chair.jpeg",
          imageAltUrl: "https://via.placeholder.com/200x200?text=Office+Chair",
        },
      ]
})

export default userWishlistAtom;