import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";
import Home from "./components/Home";
import ProductList from "./components/ProductList";

const theme = {
  mainColor: "#E8C547",
  secondaryColor: "#53687E",
  thirdColor: "#DA4167",
  backgroundColor: "#30323D",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
      <ProductList class="product-list" />
    </ThemeProvider>
  );
}

export default App;
