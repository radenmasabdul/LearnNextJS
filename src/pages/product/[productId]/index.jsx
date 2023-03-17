import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  const productId = router.query.productId;

  return (
    <>
      <h1 className="text-red-700 text-4xl">Product Details {productId}</h1>
    </>
  );
};

export default ProductDetails;
