export default function OrderItemRow(data) {
  const orderItem = data.orderItem;
  console.log(orderItem);

  return (
    <div className="row order-item">
      <div className="col-2">
        <img
          src="http://localhost:8000/media/orders/confirmation-order-icon.png"
          className="rounded" alt="ref icon" height="150" width="auto" />
      </div>
      <div className="col-7 product-detail">
        <h5>{orderItem.product_values.name}</h5>
        <p>Brand: {orderItem.product_values.brand}</p>
        <p>Vendor: {orderItem.product_values.vendor}</p>
        <p>Product price: $ {orderItem.product_values.price}</p>
      </div>
      <div className="col-3 order-item-cost">
        <h5>Purchased</h5>
        <p>Quantity: {orderItem.quantity}</p>
        <p>Subtotal: $ {orderItem.sub_total}</p>
      </div>
    </div>
  );
}