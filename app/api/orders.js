import { getAuthorizationHeaders } from "./auth";
import { interceptExpiredTokenResponse } from "./auth";


export async function processOrder() {
  const url = 'http://localhost:8000/api/orders';
  const headers = getAuthorizationHeaders();
  return await fetch(url, {
    method: 'POST',
    headers,
  });
}

export async function getOrders() {
  const url = 'http://localhost:8000/api/orders';
  const options = {
    method: 'GET',
    headers: getAuthorizationHeaders()
  }
  return await interceptExpiredTokenResponse(
    url, options
  )
}

export async function getOrder(orderId) {
  const url = `http://localhost:8000/api/orders/${orderId}`;
  const options = {
    method: 'GET',
    headers: getAuthorizationHeaders()
  }
  return await interceptExpiredTokenResponse(
    url, options
  )
}

export async function getOrderItems(orderId) {
  const url = `http://localhost:8000/api/order-items?order=${orderId}`;
  const options = {
    method: 'GET',
    headers: getAuthorizationHeaders()
  }
  return await interceptExpiredTokenResponse(
    url, options
  )
}