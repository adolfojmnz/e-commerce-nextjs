export default function CartItemRow(data) {
  const cartItem = data.cartItem;
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
        {cartItem.product_available ? <p className="text-success">In Stock</p> : <p className="text-danger">Out of Stock</p>}
        {cartItem.quantity > 1 ? <p>Quantity: {cartItem.quantity}</p> : <p>Quantity: {cartItem.quantity}</p>}
        <p>Subtotal: $ {cartItem.sub_total}</p>
      </div>
    </div>
  );
}
