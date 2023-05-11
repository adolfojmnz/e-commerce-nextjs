import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { editCategory } from "../../api/categories";
import { getCategoryDetail } from "../../api/categories";


export default function EditCategory() {
  const router = useRouter();
  const [category, setCategory] = useState({});
  const [categoryErrors, setCategoryErrors] = useState({});

  async function loadCategory(categoryId) {
    const response = await getCategoryDetail(categoryId);
    if (response.ok) {
      const data = await response.json();
      setCategory(data);
    } else {
      setCategoryErrors({ response });
    }
  }

  function handleChange(event) {
    setCategory({
      ...category,
      [event.target.name]: event.target.value
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await editCategory(category);
    if (response.ok) {
      window.location.href = `/categories/${category.id}`;
    } else {
      const data = await response.json();
      setCategoryErrors(data);
    }
  }

  useEffect(() => {
    let categoryId = router.query.id;
    if (!categoryId || categoryId.length === 0) {
      return;
    }
    loadCategory(categoryId);
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

  return (
    <div className="container">
      <h1>Edit Category</h1>
      <div className="row">
        <div className="col-12">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Category Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={category.name}
                onChange={handleChange}
              />
              {categoryErrors.name && (
                <div className="alert alert-danger">
                  {categoryErrors.name.map((error, index) => (
                    <div key={index}>{error}</div>
                  ))}
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="description">Category Description</label>
              <textarea
                id="description"
                name="description"
                className="form-control"
                value={category.description}
                onChange={handleChange}
              />
              {categoryErrors.description && (
                <div className="alert alert-danger">
                  {categoryErrors.description.map((error, index) => (
                    <div key={index}>{error}</div>
                  ))}
                </div>
              )}
            </div>
            <div className="form-group text-center">
              <a href={`/categories/${category.id}`} className="btn btn-link">
                Cancel
              </a>
              <button type="submit" className="btn btn-secondary">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
