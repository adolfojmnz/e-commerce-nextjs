import { useState, useEffect } from "react";
import { getCurrentUser, updateUser } from "../../api/users";


export default function UpdateUserProfile() {
  const [user, setUser] = useState(null);
  const [updateData, setUpdateData] = useState(null);
  const [error, setError] = useState(null);

  async function getUser() {
    const response = await getCurrentUser();
    if (!response.ok) {
      console.log(response.status);
      response.json().then((data) => {
        alert(data.detail);
      });
    }
    const data = await response.json();
    setUser(data);
  }

  async function updateUserProfile() {
    try {
      const response = await updateUser(updateData);
      if (!response.ok) {
        response.json().then((data) => {
          alert(data.detail);
          window.location.reload();
        });
      }
      window.location.href = "/users/current";
    } catch (error) {
      setError(error);
    }
  }

  function handleAvatarChange(event) {
    setUpdateData({ ...updateData, avatar: event.target.files[0] });
  }

  function handleUsernameChange(event) {
    setUpdateData({ ...updateData, username: event.target.value });
  }

  function handleEmailChange(event) {
    setUpdateData({ ...updateData, email: event.target.value });
  }

  function handleFirstNameChange(event) {
    setUpdateData({ ...updateData, first_name: event.target.value });
  }

  function handleLastNameChange(event) {
    setUpdateData({ ...updateData, last_name: event.target.value });
  }

  function handleBirthdateChange(event) {
    setUpdateData({ ...updateData, birthdate: event.target.value });
  }

  function handleAboutChange(event) {
    setUpdateData({ ...updateData, about: event.target.value });
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    updateUserProfile();
  }

  useEffect(() => {
    try {
      getUser();
    } catch (error) {
      setError(error);
    }
  }, []);

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">

      <form className="form-control" id="user-form" method="POST" onSubmit={handleFormSubmit}>

        <div className="row">
          <div className="col">
            <img src={user.avatar_url} alt="{user.name" />
            <input
              onChange={handleAvatarChange}
              type="file"
              className="form-control"
              accept="image/jpeg,image/png,image/gif"
            />
          </div>

          <div className="col">
            <div className="row">
              <div className="col-12">
                <h5 className="text-center">Account Details</h5>
                <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Username</th>
                        <td>
                          <input
                            form="user-form"
                            className="form-control"
                            placeholder={user.username} send images in post request api
                            onChange={handleUsernameChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <th>E-mail</th>
                        <td>
                          <input
                            form="user-form"
                            className="form-control"
                            placeholder={user.email}
                            onChange={handleEmailChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <th>First Name</th>
                        <td>
                          <input
                            form="user-form"
                            className="form-control"
                            placeholder={user.first_name}
                            onChange={handleFirstNameChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <th>Last Name</th>
                        <td>
                          <input
                            form="user-form"
                            className="form-control"
                            placeholder={user.last_name}
                            onChange={handleLastNameChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <th>Birthdate</th>
                        <td>
                          <input
                            form="user-form"
                            className="form-control"
                            placeholder={user.birthdate}
                            onChange={handleBirthdateChange}
                          />
                        </td>
                      </tr>
                    </thead>
                </table>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>About</th>
                    </tr>
                    <tr>
                      <td>
                        <textarea
                          className="form-control"
                          maxLength="512"
                          type="text"
                          rows="10" cols="60"
                          placeholder={user.about}
                          onChange={handleAboutChange}>
                        </textarea>
                      </td>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
      </form>
        <div className="row text-end">
          <div className="col-12">
            <button className="btn btn-secondary" onClick={() => {window.location.href='/users/current'}} type="button">Cancel</button>
            <button className="btn btn-success" onClick={handleFormSubmit} type="button" form="user-form">Save</button>
          </div>
        </div>
    </div>
  );
}