import { useState } from "react";
import { createUser } from "../../api/users";


export default function UserRegister() {
  const [userData, setUserData] = useState(null);

  function handleAvatarChange(event) {
    setUpdateData({ ...updateData, avatar: event.target.files[0] });
  }

  function handleFirstNameChange(event) {
    setUserData({ ...userData, first_name: event.target.value });
  }

  function handleLastNameChange(event) {
    setUserData({ ...userData, last_name: event.target.value });
  }

  function handleUsernameChange(event) {
    setUserData({ ...userData, username: event.target.value });
  }

  function handleEmailChange(event) {
    setUserData({ ...userData, email: event.target.value });
  }

  function handleBirthdateChange(event) {
    setUserData({ ...userData, birthdate: event.target.value });
  }

  function handlePasswordChange(event) {
    setUserData({ ...userData, password: event.target.value });
  }

  function handlePasswordConfirmationChange(event) {
    setUserData({ ...userData, password_confirmation: event.target.value });
  }

  function handleAboutChange(event) {
    setUserData({ ...userData, about: event.target.value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (userData.password !== userData.password_confirmation) {
      alert("Passwords do not match");
      return;
    }

    createUser(userData).then((response) => {
      if (!response.ok) {
        return response.json().then((data) => {
          alert(Object.keys(data).map((k) => `${k}: ${data[k]}`).join("\n"));
          return;
        });
      }
      window.location.href = "/login";
    });
  }

  return (
    <div className="container">
      <div className="row">
        <header className="col-12">
          <h1>Register</h1>
        </header>
      </div>
      <div className="row">
        <div className="col-12">
          <form>
            <div className="form-group">
              <label htmlFor="avatar">Avatar</label>
              <input
                onChange={handleAvatarChange}
                type="file"
                className="form-control"
                id="avatar"
              />
            </div>
            <div className="form-group">
              <label htmlFor="first_name">First Name</label>
              <input
                onChange={handleFirstNameChange}
                type="text"
                className="form-control"
                id="first_name"
                placeholder="Enter first name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="last_name">Last Name</label>
              <input
                onChange={handleLastNameChange}
                type="text"
                className="form-control"
                id="last_name"
                placeholder="Enter last name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                onChange={handleUsernameChange}
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                onChange={handleEmailChange}
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter e-mail"
              />
            </div>
            <div className="form-group">
              <label htmlFor="birthdate">Birthdate</label>
              <input
                onChange={handleBirthdateChange}
                type="date"
                className="form-control"
                id="birthdate"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                onChange={handlePasswordChange}
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="passwordConfirmation">Confirm Password</label>
              <input
                onChange={handlePasswordConfirmationChange}
                type="password"
                className="form-control"
                id="passwordConfirmation"
                placeholder="Confirm password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="about">About (Optional short description about yourself)</label>
              <textarea
                onChange={handleAboutChange}
                className="form-control"
                id="about"
                rows="3"
              ></textarea>
            </div>
            <button
              onClick={handleFormSubmit}
              type="submit"
              className="btn btn-secondary"
            >
              Create User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}