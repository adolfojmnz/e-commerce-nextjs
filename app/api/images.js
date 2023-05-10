import { interceptExpiredTokenResponse } from './auth';
import { getAuthorizationHeaders } from './auth';


export async function uploadImage(image, withAuthentication=false) {
  const formData = new FormData();
  formData.append('image', image);

  if (withAuthentication === true) {
    const headers = getAuthorizationHeaders();
    const request = new Request('http://localhost:8000/api/images', {
      method: 'POST',
      headers: headers,
      body: image,
    });
    return await interceptExpiredTokenResponse(request);
  }
  const request = new Request('http://localhost:8000/api/images', {
    method: 'POST',
    body: formData,
  });
  return await fetch(request);
}