import { ProductWrapper } from "../styles";
const Product = (props) => {
  const product = props.product;
  return (
    <ProductWrapper>
      <img src={product.image} alt={product.name} />
      <p>{product.name}</p>
      <p class="product-price">{product.price}</p>
    </ProductWrapper>
  );
};

export default Product;
