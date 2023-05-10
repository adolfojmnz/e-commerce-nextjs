import { interceptExpiredTokenResponse } from "./auth";
import { getAuthorizationHeaders } from "./auth";
import { uploadImage } from "./images";

export async function getCurrentUser() {
  const url = `http://localhost:8000/api/users/current`;
  const options = {
    method: 'GET',
    headers: getAuthorizationHeaders()
  }
  return await interceptExpiredTokenResponse(url, options);
}

export async function updateUser(data) {
  if (data.avatar) {
    const response = await uploadImage(data.avatar);
    await response.json().then((imageData) => {
      data.avatar_url = imageData.image;
    });
  }
  console.log(data);
  const url = `http://localhost:8000/api/users/current`;
  const options = {
    method: 'PATCH',
    headers: getAuthorizationHeaders(),
    body: JSON.stringify(data),
  }
  return await interceptExpiredTokenResponse(url, options);
}

export async function createUser(data) {
  if (data.avatar) {
    const response = await uploadImage(data.avatar);
    await response.json().then((imageData) => {
      data.avatar_url = imageData.image;
    });
  }

  const url = `http://localhost:8000/api/users`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }
  return await fetch(url, options);
}