import { getAuthorizationHeaders } from './auth';
import {  interceptExpiredTokenResponse } from './auth';


export async function createCategory(categoryData) {
  const url = `http://localhost:8000/api/categories`;
  const options = {
    method: 'POST',
    headers: getAuthorizationHeaders(),
    body: JSON.stringify(categoryData)
  };
  return await interceptExpiredTokenResponse(url, options);
}

export async function editCategory(categoryData) {
  const url = `http://localhost:8000/api/categories/${categoryData.id}`;
  const options = {
    method: 'PUT',
    headers: getAuthorizationHeaders(),
    body: JSON.stringify(categoryData)
  };
  return await interceptExpiredTokenResponse(url, options);
}

export async function getCategoryDetail(categoryId) {
  const url = `http://localhost:8000/api/categories/${categoryId}`;
  return await fetch(url);
}

export async function getCategoryList() {
  const url = `http://localhost:8000/api/categories`;
  return await fetch(url);
}

export async function getCategoryProducts(categoryId) {
  const url = `http://localhost:8000/api/categories/${categoryId}/products`;
  return await fetch(url);
}

