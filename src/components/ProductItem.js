const Product = (props) => {
  const product = props.product;
  return (
    <div>
      <img src={product.image} alt={product.name} />
      <p>{product.name}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default Product;
