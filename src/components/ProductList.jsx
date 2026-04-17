import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="row">
      {products.map((p) => (
        <div className="col-md-4 mb-3" key={p.id}>
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;