import { useState } from "react";
import { login } from "../app/api/auth";


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
        throw new Error("Already logged in");
      }
      if (username === "" || password === "") {
        throw new Error("Username or password is empty");
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
      <div className="container">
        <div className="row">
          <div className="col col-lg-5">
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
          <div className="col- col-lg-5">
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
        <button type="submit" className="btn btn-secondary login-button">
          Login
        </button>
      </div>
    </form>
  );
}
