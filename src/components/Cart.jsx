import styled from "styled-components";
import { useShop } from "./ShopContext";
import ProductCard from "./products/ProductCard";

const Cart = () => {
  const {products,total} = useShop();

  return (
    <div>
  <Title>Your cart Total is {total}.00$</Title>

  {products.map((product,i) => (
    <ProductCard key={i} {...product} />
  ))}
  </div>
  );
};

export default Cart;

const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
`;
