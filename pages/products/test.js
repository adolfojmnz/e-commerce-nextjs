import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductDetails = () => {
  return (
    <div className="container">
      <header className="header">
        <h1 className="">Argon (Leadwood/Silver)</h1>
      </header>

      <div className="row">
        <div className="col-md-5">
          <img
            src="http://localhost:8000/media/products/argon-leadwood-silver.webp"
            alt="Product Image"
            className="img-fluid"
          />
        </div>
        <div className="col-md-7">
          <h2 className="text-center mb-4">Product Specifications</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Brand:</strong> Holzkern
            </li>
            <li className="list-group-item">
              <strong>Color:</strong> Walnut/Gray
            </li>
            <li className="list-group-item">
              <strong>Movement:</strong> quartz
            </li>
            <li className="list-group-item">
              <strong>Release Date:</strong> 2023-04-10
            </li>
            <li className="list-group-item">
              <strong>Case Material:</strong> metal-wood
            </li>
            <li className="list-group-item">
              <strong>Diameter (mm):</strong> 42
            </li>
            <li className="list-group-item">
              <strong>Waterproof:</strong> Yes
            </li>
            <li className="list-group-item">
              <strong>Bracelet Material:</strong> metal-wood
            </li>
            <li className="list-group-item">
              <strong>Date Indicator:</strong> No
            </li>
            <li className="list-group-item">
              <strong>Chronograph Features:</strong> No
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-md-7">
          <h2 className="text-left mt-4">Product Description</h2>
          <p>
            Just like the diversity of elements in our world, our automatic watch made from leadwood and scratch-resistant sapphire glass should always remind you that it’s the inner values that count.
          </p>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-4">
          <ul className="list-unstyled">
            <li>
              <strong>Price:</strong> $499.00
            </li>
            <li>
              <strong>Vendor:</strong> http://localhost:8000/api/users/18
            </li>
            <li>
              <strong>Category:</strong> http://localhost:8000/api/categories/3
            </li>
            <li>
              <strong>Rating:</strong> 5/5 (2 Reviews)
            </li>
            <li>
              <strong>Availability:</strong> Yes
            </li>
            <li>
              <strong>Stock:</strong> 5
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col">
         <div className="reviews mt-4">
            <div className="review">
              <h3>Review Title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, mauris at scelerisque tempor, tellus nisi tincidunt lorem, eu congue justo velit non mauris. Ut id semper tellus. Duis quam turpis, dapibus quis augue sed, fermentum luctus eros. Sed molestie.
              </p>
            </div>
            <div className="review">
              <h3>Review Title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, mauris at scelerisque tempor, tellus nisi tincidunt lorem, eu congue justo velit non mauris. Ut id semper tellus. Duis quam turpis, dapibus quis augue sed, fermentum luctus eros. Sed molestie.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductDetails;


  // return (
  //   <div className="container">
  //     <header className="header">
  //       <h1 className="">Product Details</h1>
  //     </header>
  //     <div className="row product">
  //       <div className="col-md-3 product-detail-image">
  //         <img src={product.image} className="rounded" alt={product.name} height="300" width="auto" />
  //       </div>
  //       <div className="col-md-1"></div>
  //       <div className="col-md-5 product-detail">
  //         <div className="row">
  //           <h4>{product.name}</h4>
  //           <p>{product.description}</p>
  //         </div>
  //         <div className="row">
  //           <small>Brand: {product.brand}</small>
  //           <small>Vendor: {product.vendor}</small>
  //           {product.rating ?
  //             <small>Rating {product.rating}/5 ({product.total_reviews} Reviews)</small> :
  //             <small>No ratings</small>
  //           }
  //         </div>
  //       </div>
  //       <div className="col-md-1"></div>
  //       <div className="col-md-2 product-price">
  //         <div className="row">
  //           $ {product.price}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
