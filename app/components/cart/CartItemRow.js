import { deleteCartItem } from "../../api/cart";


export default function CartItemRow(data) {
  const cartItem = data.cartItem;

  function removeItemFromCart(event) {
    event.preventDefault();
    try {
      deleteCartItem(cartItem.id)
      .then(response => {
        if (response.status === 204) {
          window.location.href = '/cart';
        } else {
          response.json()
          .then(data => {
            throw new Error(data.message);
          });
        }
      });
    } catch (err) {
      throw new Error(`Error removing product from cart: ${err}`);
    }
  }

  return (
    <div className="row cart-item">
      <div className="col-md-2">
        <img
          src={'http://localhost:8000/' + cartItem.product_image}
          className="rounded" alt={cartItem.product_name} height="150" width="auto" />
      </div>
      <div className="col-md-7 product-detail">
        <h4>{cartItem.product_name}</h4>
        <p>Brand: {cartItem.product_brand}</p>
        <p>Vendor: {cartItem.product_vendor}</p>
        <p>Product price: $ {cartItem.product_price}</p>
      </div>
      <div className="col-md-3 product-price">
        {cartItem.product_available ?
          <p className="text-success">In Stock</p> :
          <p className="text-danger">Out of Stock</p>
        }
        <p>Quantity: {cartItem.quantity}</p>
        <p>Subtotal: $ {cartItem.sub_total}</p>

        <div className="btn-toolbar">
          <div className="btn-group mr-2">
            <form method="POST" onSubmit={removeItemFromCart}>
              <button type="submit" className="btn btn-warning">Remove</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
