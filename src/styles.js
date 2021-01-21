import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    color: ${(props) => props.theme.mainColor};
    background-color : ${(props) => props.theme.backgroundColor}; 
}
`;

export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100;
  margin-bottom: 2%;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Description = styled.h1`
  text-align: center;
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const ProductWrapper = styled.div`
  margin: 20px;

  img {
    width: 300px;
    height: 3 00px;
  }
  p {
    text-align: center;
    &.product-price {
      color: ${(props) => props.theme.thirdColor};
      font-weight: bold;
    }
  }
`;
