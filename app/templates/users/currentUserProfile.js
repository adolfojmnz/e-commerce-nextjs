export function currentUserProfileTemplate(user) {
  return (
    <div className="container">
      <header className="row">
        <div className="col-12">
          <h1>User Profile</h1>
        </div>
      </header>

      <div className="row">
        <div className="col-4">
          <img src={user.avatar_url} alt={user.username} />
        </div>

        <div className="col-8">

          <div className="row">
            <div className="col-6">
              <h4 className="text-center">Account Details</h4>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>E-mail</th>
                    <td>{user.email}</td>
                  </tr>
                  <tr>
                    <th>Username</th>
                    <td>{user.username}</td>
                  </tr>
                  <tr>
                    <th>First Name</th>
                    <td>{user.first_name}</td>
                  </tr>
                  <tr>
                    <th>Last Name</th>
                    <td>{user.last_name}</td>
                  </tr>
                  <tr>
                    <th>Birthdate</th>
                    <td>{user.birthdate}</td>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="col-6">
              <h4 className="text-center">Stats</h4>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Joined On</th>
                    <td>{user.date_joined}</td>
                  </tr>
                  <tr>
                    <th>Last Login</th>
                    <td>{user.last_login}</td>
                  </tr>
                  <tr>
                    <th>Last Purchse</th>
                    <td>not implemented</td>
                  </tr>
                  <tr>
                    <th>Total Purchases</th>
                    <td>not implemented</td>
                  </tr>
                  <tr>
                    <th>Total Spent</th>
                    <td>not implemented</td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h4 className="text-left mb-4">About</h4>
              <p>{user.about}</p>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <a href="/users/update"><button className="btn btn-secondary">Edit Profile</button></a>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

