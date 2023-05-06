export async function getReviewList() {
  const url = `http://127.0.0.1:8000/api/reviews`;
  return await fetch(url);
}

export async function getReviewDetail(reviewId) {
  const url = `http://127.0.0.1:8000/api/reviews/${reviewId}`;
  return await fetch(url);
}

export async function getReviewListByProduct(productId) {
  const url = `http://127.0.0.1:8000/api/reviews?product=${productId}`;
  return await fetch(url);
}
