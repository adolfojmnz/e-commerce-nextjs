import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getProductDetail } from '../../api/products';
import { addToCart } from '../../api/cart';
import ProductReviews from '../reviews/ProductReviews';


export default function ProductDetail() {
  const router = useRouter();
  const [product, setProduct] = useState({specifications: {}});
  const [addToCartQuantity, setAddToCartQuantity] = useState(1);
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

  function handleAddToCartChange(event) {
    event.preventDefault();
    setAddToCartQuantity(event.target.value);
    console.log(addToCartQuantity);
  }

  async function handleAddToCartSumbit(event) {
    try {
      event.preventDefault();
      addToCart(product.id, addToCartQuantity)
      .then(response => {
        if (response.status === 201) {
          window.location.href = '/cart';
        } else {
          response.json()
          .then(data => {
            if (data.message === 'This product is already in your cart.') {
              return alert(data.message);
            }
            throw new Error(data.message);
          });
        }
      });
    } catch (err) {
      throw new Error(`Error adding product to cart: ${err}`);
    }
  }

  const specifications = () => {
    if (product.specifications === null) {
      return <li className="list-group-item">No specifications available.</li>
    }
    return Object.keys(product.specifications).map((key, index) => (
      <li className="list-group-item" key={index}>
        <strong>{key}:</strong> {product.specifications[key]}
      </li>
    ))
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
            <br />

            <ul className="list-unstyled">
              <li> <strong>Price:</strong> $ {product.price} </li>
              <li> <strong>Vendor:</strong> {product.vendor} </li>
              <li> <strong>Category:</strong> {product.category} </li>
              <li> <strong>Rating:</strong> 5/5 (2 Reviews) </li>
              <li> <strong>Available:</strong> {product.available ? 'Yes' : 'No'} </li>
              <li> <strong>Stock:</strong> {product.quantity} </li>
            </ul>
            <br />

            <form className="input-group mb-3" onSubmit={handleAddToCartSumbit}>
              <input
                onChange={handleAddToCartChange}
                type="number"
                className="form-control"
                placeholder="Quantity"
                aria-label="Quantity"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="submit">Add to Cart</button>
              </div>
            </form>
        </div>
      </div>
      <br /><br />

      <div className="row">
        <div className="col">
          <h4 className="text-center mb-4">Specifications</h4>
          <ul className="list-group">
            {specifications()}
          </ul>
        </div>
      </div>
      <br /><br />

      <div className="row">
        <div className="col">
          <div className="reviews mt-4">
          <h3>Reviews</h3>
          <br></br>
          <ProductReviews />
          </div>
        </div>
      </div>
      <br />

    </div>
  );
}
