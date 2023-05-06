export function getProductList() {
  const url = `http://127.0.0.1:8000/api/products`;
  return fetch(url);
}

export async function getProductDetail(productId) {
  const url = `http://127.0.0.1:8000/api/products/${productId}`;
  return await fetch(url);
}

export async function getVendorName(vendorURL) {
  const response = await fetch(vendorURL);
  return await response.json().username;
}

export async function getCategoryName(categoryURL) {
  const response = await fetch(categoryURL);
  return await response.json().name;
}