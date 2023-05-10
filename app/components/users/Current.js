import { useState, useEffect } from "react";
import { getCurrentUser } from "../../api/users";
import { currentUserProfileTemplate } from "../../templates/users/currentUserProfile";


export default function CurrentUserProfile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  async function getUser() {
    const response = await getCurrentUser();
    if (!response.ok) {
      console.log(response.status);
      alert("You must be logged in to view this page.");
      window.location.href = "/login";
    }
    const data = await response.json();
    setUser(data);
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
    currentUserProfileTemplate(user)
  );
}