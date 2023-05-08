import { useState, useEffect } from 'react';
import { getProductList } from '../../api/products';


export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    try {
      getProductList()
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      });
    } catch (err) {
      setErrors(err);
    }
  }, []);

  if (errors !== null) {
    return <h5>An error occured while fetching products!</h5>;
  }
  if (products.length === 0) {
    return <h5>Product List Unavailable!</h5>
  }

  return (
    products.map((product) => (
    <div className="row product" key={product.id}>
      <div className="col-md-2">
        <img src={product.image} className="rounded" alt={product.name} height="150" width="auto" />
      </div>
      <div className="col-md-8 product-detail">
        <div className="row">
          <h4>
            <a className="product-detail-anchor" href={`/products/${product.id}`}>
              {product.name}
            </a>
          </h4>
          {product.description.length < 300 ?
             <p>{product.description}</p> :
             <p>{product.description.slice(0, 300)}...{' '}
               <a href={`/products/${product.id}`}>Read more</a>
              </p>}
        </div>
        <div className="row">
          {product.rating ? <small>Rating: {product.rating}/5 ({product.total_reviews} Reviews)</small> : <small>No ratings!</small>}
        </div>
      </div>
      <div className="col-md-2 product-price">
      $ {product.price}
      </div>
    </div>
    ))
  );
}
