import CartItemRow from "./CartItemRow";


export default function CartItemList(data) {
  return (
    data.cartItems.map((cartItem) =>
      <CartItemRow
        key={cartItem.id}
        cartItem={cartItem}
      />
    )
  )
}
