import "./App.css";
import catCafeImage from "./images/catcafe.jpeg";
import products from "./products";

const productList = products.map((product) => {
  return (
    <div class="productList">
      <img src={product.image} alt={product.name} />
      <p>{product.name}</p>
      <p>{product.price}</p>
    </div>
  );
});

function App() {
  return (
    <div className="home-page">
      <div className="shop-title">
        <h1>Purrfect 🐾</h1>
      </div>
      <div className="shop-subtitle">
        <h2>Stay PAWsitive! </h2>
      </div>
      <div>
        <img
          className="cafe-image"
          src={catCafeImage}
          alt="The interior of purrfect"
        />
      </div>
      <div>{productList}</div>
    </div>
  );
}

export default App;
