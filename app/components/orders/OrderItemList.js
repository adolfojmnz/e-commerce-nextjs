import OrderItemRow from "./OrderItemRow";


export default function OrderItemList(data) {
  const orderItems = data.orderItems;
  if (orderItems.length === 0) {
    return <h5 className="text-danger">There are no items in your order.</h5>
  }
  return (
    orderItems.map((orderItem) =>
      <OrderItemRow
        key={orderItem.id}
        orderItem={orderItem}
      />
    )
  )
}