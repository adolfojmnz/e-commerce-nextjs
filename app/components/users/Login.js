import { useState } from "react";
import { login } from "../../api/auth";


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      if (localStorage.getItem('authenticated')) {
        alert("Already logged in");
        window.location.href = '/';
        return;
      }
      if (username === "" || password === "") {
        alert("Username or password is empty")
        return;
      }
      login(username, password)
      .then(() => {
        const session = localStorage.getItem('authenticated');
        if (session) {
          window.location.href = '/';
        }
      });
    } catch (err) {
      setErrors(err);
    }
  }

  // TODO: Render a custom page for errors
  if (errors !== null) {
    console.log(errors);
    return (
      <h4>An error occured while trying to log in</h4>
    )
  }

  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="container text-center">
        <div className="row">
          <header className="col">
            <h1>Login</h1>
          </header>
        </div>
        <div className="row">
          <div className="col-3"></div>
          <div className="col">
            <div className="row">
              <div className="col">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  onChange={handleUsernameChange}
                  type="username"
                  className="form-control"
                  id="username"
                  aria-describedby="usernamelHelp"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  onChange={handlePasswordChange}
                  type="password"
                  className="form-control"
                  id="password"
                />
              </div>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
        <button type="submit" className="btn btn-secondary login-button">
          Login
        </button>
        <div className="row">
          <div className="col">
            <p>Don't have an account?</p>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => window.location.href = '/register'}
            > Register
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
