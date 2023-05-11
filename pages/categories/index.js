import CategoryList from '../../app/components/categories/CategoryList.js';


export default function Categories() {
  return (
    <div className='container'>
      <div className='row'>
        <header className='col'>
          <h1>Categories</h1>
        </header>
      </div>
      <div className='row text-end'>
        <div className='col'>
          <a href='/categories/create' className='btn btn-secondary'>New Category</a>
        </div>
      </div>
      <CategoryList />
    </div>
  );
}
