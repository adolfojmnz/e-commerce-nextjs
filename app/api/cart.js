import { getAuthorizationHeaders } from "./auth";
import { interceptExpiredTokenResponse } from "./auth";

export async function getCart() {
  const url = 'http://localhost:8000/api/cart';
  const options = {
    method: 'GET',
    headers: getAuthorizationHeaders()
  }
  return await interceptExpiredTokenResponse(
    url, options
  )
}

export async function getCartItems() {
  const url = 'http://localhost:8000/api/cart/items';
  const headers = getAuthorizationHeaders();
  return await fetch(url, {
    method: 'GET',
    headers,
  });
}