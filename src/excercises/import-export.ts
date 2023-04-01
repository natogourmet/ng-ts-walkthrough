import { Product, calculateISV } from "./args-destructuring";

const cart: Product[] = [
  {
    desc: "Phone",
    price: 100,
  },
  {
    desc: "Tablet",
    price: 200,
  },
];

const [total, isv] = calculateISV(cart);