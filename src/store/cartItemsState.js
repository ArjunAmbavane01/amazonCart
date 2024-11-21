import { atom } from 'recoil'

const userCartAtom = atom({
  key: 'userCartAtom',
  default: [
    {
      id: 6,
      name: "Stainless Steel Water Bottle",
      description: "Insulated water bottle that keeps beverages cold for 24 hours and hot for 12 hours.",
      price: 25.99,
      imageUrl: "images/bottle.jpeg",
      imageAltUrl: "https://via.placeholder.com/200x200?text=Water+Bottle",
      quantity: 1,
    },
    {
      id: 7,
      name: "Gaming Laptop",
      description: "High-performance gaming laptop with Intel Core i7, 16GB RAM, and NVIDIA GeForce RTX 3060.",
      price: 1299.99,
      imageUrl: "images/laptop.jpeg",
      imageAltUrl: "https://via.placeholder.com/200x200?text=Gaming+Laptop",
      quantity: 1,
    },
  ]
})

export default userCartAtom;