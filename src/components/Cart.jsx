import styled from "styled-components";
import { useShop } from "./ShopContext";
import ProductCard from "./products/ProductCard";

const Cart = () => {
  const {products,total} = useShop();

  return (
    <>
    <Title>Your cart Total is {total}.00$</Title>
    <ProductsWrapper>


  {products && products.map((product,i) => (
    <ProductCard key={i} {...product} />
  ))}

  </ProductsWrapper>
  </>
  );
};

export default Cart;

const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
`;

const ProductsWrapper = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 20px;
`;
