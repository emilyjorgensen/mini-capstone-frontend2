export function ProductsIndex(props) {
  return (
    <div>
      <h1>All Products</h1>
      {props.products.map((product) => (
        <div key={product.id}>
          <div>
            {product.images.map((image) => (
              <div key={image.id}>
                <img src={image.url} alt="product image" width="200px" />
              </div>
            ))}
          </div>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <button>More Info</button>
        </div>
      ))}
    </div>
  );
}
