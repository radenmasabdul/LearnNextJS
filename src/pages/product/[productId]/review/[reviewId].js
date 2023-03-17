import { useRouter } from "next/router";

const Review = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;

  return (
    <>
      <h1 className="text-red-700 text-4xl">
        Reviews {reviewId} for Product {productId}
      </h1>
    </>
  );
};

export default Review;
