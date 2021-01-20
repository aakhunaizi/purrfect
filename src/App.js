import "./App.css";
import catCafeImage from "./images/catcafe.jpeg";
function App() {
  return (
    <div className="home-page">
      <div className="shop-title">
        <h1>Purrfect</h1>
      </div>
      <div className="shop-subtitle">
        <h2>Stay PAWsitive!</h2>
      </div>
      <div className="cafe-image">
        <img src={catCafeImage} />
      </div>
    </div>
  );
}

export default App;
