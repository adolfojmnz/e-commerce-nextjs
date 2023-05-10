import { useEffect } from "react";

export default function Navbar() {

  useEffect(() => {
    if (localStorage.getItem('authenticated') === 'true') {
      document.getElementById('login').style.display = 'none';
      document.getElementById('logout').style.display = 'block';
    } else {
      document.getElementById('login').style.display = 'block';
      document.getElementById('logout').style.display = 'none';
      document.getElementById('profile').style.display = 'none';
    }
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                  E-commerce
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" href="/products">
                      Product
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/cart">
                      Cart
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/orders">
                      Orders
                    </a>
                  </li>
                  <li className="nav-item" id="login">
                    <a className="nav-link" href="/session/login">
                      Login/Register
                    </a>
                  </li>
                  <li className="nav-item" id="logout">
                    <a className="nav-link" href="/session/logout">
                      logout
                    </a>
                  </li>
                  <li className="nav-item" id="profile">
                    <a className="nav-link" href="/users/current">
                      Profile
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
