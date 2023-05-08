import CartItemRow from "./CartItemRow";


export default function CartItemList(data) {
  if (data.cartItems.length === 0) {
    return <h5 className="text-danger">There are no items in your cart.</h5>
  }
  return (
    data.cartItems.map((cartItem) =>
      <CartItemRow
        key={cartItem.id}
        cartItem={cartItem}
      />
    )
  )
}
