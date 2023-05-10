import Cart from '../../app/components/cart/Cart';


export default function CartPage() {
  return (
    <div className="container">
      <header className="header row">
        <h1 className='col'>Shopping Cart</h1>
        <Cart />
      </header>
    </div>
  );
}


