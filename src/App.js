import styled from "styled-components";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Products from "./components/products/Products.jsx";
import Cart from "./components/Cart.jsx";
import {ShopProvider} from "./components/ShopContext";
import "./App.css";

function App() {
  return (
     <ShopProvider>
    <Wrapper>
      <TitleWrapper>
        <h1>Ecommerce Shop Project</h1>
      </TitleWrapper>
      <Router>
        <LinksWrapper>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
        </LinksWrapper>
        <Routes>
          <Route path="/" exact element={<Products/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
    </Wrapper>
    </ShopProvider>
   
  );
}

export default App;

const Wrapper = styled.div`
  font-family: "Roboto";
  margin: 40px;

  display: grid;
  row-gap: 20px;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  * {
    margin: 0;
  }

  display: grid;
  row-gap: 10px;

  a {
    text-decoration: none;
    font-weight: bold;
    color: black;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    color: #bb7250;

    :hover {
      color: #bb7250;
      font-weight: bold;
      text-decoration: underline;
    }
  }
`;
