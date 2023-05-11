import { useState, useEffect } from "react";
import { createCategory } from "../../api/categories";


export default function CreateCategory() {
  const [categoryData, setCategoryData] = useState({});
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    setCategoryData({
      ...categoryData,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    createCategory(categoryData).then((response) => {
      if (!response.ok) {
        return response.json().then((errors) => {
          alert(Object.keys(errors).map((key) => `${key} ${errors[key]}`));
        });
      }
      response.json().then((data) => {
        window.location.href = `/categories/${data.id}`;
      });
    });
  }

  return (
    <div className="container container-form">
      <div className="row">
        <header className="col-12">
          <h1>Add Category</h1>
        </header>
      </div>
      <div className="row">
        <div className="col-12">
          <form onSubmit={handleSubmit} className="form-control">
            <div className="form-group">
              <label htmlFor="name">Category Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Category Description</label>
              <textarea
                type="text"
                className="form-control"
                id="description"
                name="description"
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-secondary">
              Add Category
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
