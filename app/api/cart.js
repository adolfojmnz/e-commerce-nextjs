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
  const url = 'http://localhost:8000/api/cart-items';
  const headers = getAuthorizationHeaders();
  return await fetch(url, {
    method: 'GET',
    headers,
  });
}

export async function addToCart(productId, quantity) {
  const url = 'http://localhost:8000/api/cart-items';
  const headers = getAuthorizationHeaders();
  const body = JSON.stringify(
    {product_id: productId, quantity: quantity}
  );
  return await fetch(url, {
    method: 'POST',
    headers,
    body,
  });
}

export async function updateCartItemQuantity(cartItemId, quantity) {
  const url = `http://localhost:8000/api/cart-items/${cartItemId}`;
  const headers = getAuthorizationHeaders();
  const body = JSON.stringify({quantity: quantity});
  return await fetch(url, {
    method: 'PATCH',
    headers,
    body,
  });
}

export async function deleteCartItem(cartItemId) {
  const url = `http://localhost:8000/api/cart-items/${cartItemId}`;
  const headers = getAuthorizationHeaders();
  return await fetch(url, {
    method: 'DELETE',
    headers,
  });
}
