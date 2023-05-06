import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getReviewListByProduct } from "../../api/reviews";


export default function ProductReviews() {
  const router = useRouter();
  const [reviews, setReviews] = useState([]);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    try {
      if (!router.query.productid) {
        return;
      }
      getReviewListByProduct(router.query.productid)
      .then(response => response.json())
      .then(data => {
        setReviews(data);
      });
    } catch (err) {
      setErrors(err);
    }
  }, [router]);

  if (errors !== null) {
    return <h5>An error occured while fetching reviews!</h5>;
  }
  if (reviews.length === 0) {
    return <h5>No reviews available!</h5>
  }

  return (
    reviews.map((review) => (
      <>
        {console.log(review.id)}
        <div className="review" key={review.id}>
          <h4>{review.title} | {review.rating} | {review.user}</h4>
          <p>{review.text}</p>
          <br></br>
        </div>
      </>
    ))
  );
}