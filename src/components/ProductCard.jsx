const ProductCard = ({ product }) => {
  return (
    <div className="card p-3 product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h5>{product.title}</h5>
      <p>{product.description}</p>
      <p className="price">₹{product.price}</p>
      <p className="category">{product.category}</p>
    </div>
  );
};

export default ProductCard;