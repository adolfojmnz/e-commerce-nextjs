import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getCategoryDetail } from "../../api/categories";
import { getCategoryProducts } from "../../api/categories";


export default function CategoryDetails() {
  const router = useRouter();
  const [category, setCategory] = useState({});
  const [products, setProducts] = useState([]);
  const [categoryErrors, setCategoryErrors] = useState({});
  const [productErrors, setProductErrors] = useState({});

  async function loadCategory(categoryId) {
    const response = await getCategoryDetail(categoryId);
    if (response.ok) {
      const data = await response.json();
      setCategory(data);
    } else {
      setCategoryErrors({ response });
    }
  }

  async function loadProducts(categoryId) {
    const response = await getCategoryProducts(categoryId);
    if (response.ok) {
      const data = await response.json();
      setProducts(data);
    } else {
      setProductErrors({ response });
    }
  }

  useEffect(() => {
    let categoryId = router.query.id;
    if (!categoryId || categoryId.length === 0) {
      return;
    }
    loadCategory(categoryId);
    loadProducts(categoryId);
  }, [router]);

  if (categoryErrors.response) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p>Error loading category: {categoryErrors.response.status}</p>
          </div>
        </div>
      </div>
    );
  }

  if (category === {}) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p>Loading category...</p>
          </div>
        </div>
      </div>
    );
  }

  function productRows() {
    if (productErrors.response) {
      return (
        <p>Error loading products: {productErrors.response.status}</p>
      );
    }
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <a href={`/products/${product.id}`}>{product.name}</a>
              </td>
              <td>${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <div className="container">

      <div className="row">

          <div className="row">
            <header className="col">
              <h1>Category Details</h1>
            </header>
          </div>
          <div className="row">
            <div className="col-9">
              <p><strong>Name</strong>: {category.name}</p>
              <p><strong>Description</strong>: {category.description}</p>
            </div>
            <div className="col-3 text-end">
              <a
                className="btn btn-secondary"
                href={`/categories/${category.id}/edit`}
              >
                Edit Category
              </a>
            </div>
          </div>
          <div className="row category-products">
            <div className="col-12">
              {productRows()}
            </div>
          </div>


      </div>
    </div>
  );
}

