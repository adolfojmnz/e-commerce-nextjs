import ProductList from "../../app/components/products/ProductList";


export default function productListPage() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="">Products</h1>
        <ProductList />
      </header>
    </div>
  )
};
