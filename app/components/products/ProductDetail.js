import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getProductDetail } from '../../api/products';
import ProductReviews from '../reviews/ProductReviews';


export default function ProductDetail() {
  const router = useRouter();
  const [product, setProduct] = useState({specifications: {}});
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    try {
      if (!router.query.productid) {
        return;
      }
      getProductDetail(router.query.productid)
      .then(response => response.json())
      .then(data => {
        setProduct(data);
      });
    } catch (err) {
      setErrors(err);
    }
  }, [router]);

  if (errors !== null) {
    return <h5>An error occured while fetching product details!</h5>;
  }
  if (product.length === 0) {
    return <h5>Product Details Unavailable!</h5>
  }

  return (
    <div className="container">
      <header className="header">
        <h1 className="">{product.name}</h1>
      </header>

      <div className="row">
        <div className="col-md-5">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid"
          />
        </div>
        <div className='col-md-1'></div>
        <div className="col-md-6 text-end">
          <h4 className="mt-4">Description</h4>
          <p>{product.description}</p>
          <br></br>

          <ul className="list-unstyled">
            <li> <strong>Price:</strong> $ {product.price} </li>
            <li> <strong>Vendor:</strong> {product.vendor} </li>
            <li> <strong>Category:</strong> {product.category} </li>
            <li> <strong>Rating:</strong> 5/5 (2 Reviews) </li>
            <li> <strong>Available:</strong> {product.available ? 'Yes' : 'No'} </li>
            <li> <strong>Stock:</strong> {product.quantity} </li>
          </ul>
          <br></br>

          <form className="form-inline">
            <label className="my-1 mr-2" htmlFor="quantity">Quantity</label>
            <input type="number" className="form-control mb-2 mr-sm-2" id="quantity" placeholder="1" />
            <button type="submit" className="btn btn-secondary">Add to Cart</button>
          </form>

        </div>
      </div>

      <br></br> <br></br>

      <div className="row">
        <div className="col">
          <h4 className="text-center mb-4">Specifications</h4>
          <ul className="list-group">
            {
              Object.keys(product.specifications).map((key, index) => (
                <li className="list-group-item" key={index}>
                  <strong>{key}:</strong> {product.specifications[key]}
                </li>
              ))
            }
          </ul>
        </div>
      </div>

      <br></br>
      <br></br>

      <div className="row">
        <div className="col">
          <div className="reviews mt-4">
          <h3>Reviews</h3>
          <br></br>
          <ProductReviews />
          </div>
        </div>
      </div>

      <br></br> <br></br>

    </div>
  );
}
