import { useState } from 'react';
import { logout } from '../../app/api/auth';


export default function Logout() {
  const [errors, setErrors] = useState(null);

  const handleLogout = (event) => {
    event.preventDefault();
    try {
      logout()
      .then(() => {
        window.location.href = '/';
      })
    } catch(err) {
      setErrors(err);
    }
  }

  if (errors !== null) {
    console.log(errors);
    return <h5>An error occured while logging out!</h5>;
  }

  return (
    <form className="" onSubmit={handleLogout}>
      <div className="container">
        <div className="row">
          <div className="col col-lg-5">
            <p>Do you want to logout?</p>
          </div>
        </div>
        <button type="submit" className="btn btn-secondary login-button">
          Logout
        </button>
      </div>
    </form>
  );
}