import { useState, useEffect } from "react";
import { getCategoryList } from "../../api/categories";


export default function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  async function loadCategories() {
    const response = await getCategoryList();
    if (response.ok) {
      const data = await response.json();
      setCategories(data);
    } else {
      setErrors({ response });
    }
    setIsLoading(false);
  }

  useEffect(() => {
    loadCategories();
  }, []);

  if (isLoading) {
    return (
      <div className="row">
        <div className="col-12">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (errors.response) {
    return (
      <div className="row">
        <div className="col-12">
          <p>Error: {errors.response.status}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="row">
      <div className="col-12">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Category</th>
              <th>Products</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <td>
                  <a href={`/categories/${category.id}`}>{category.name}</a>
                </td>
                <td>{category.products}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}