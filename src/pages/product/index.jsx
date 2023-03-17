import Link from "next/link";

const ProductList = ({ productId = 100 }) => {
  return (
    <>
      <Link href="/product/1">
        <h1 className="text-red-700 text-2xl">Product 1</h1>
      </Link>

      <Link href="/product/2">
        <h1 className="text-red-700 text-2xl">Product 2</h1>
      </Link>
      <Link href="/product/3">
        <h1 className="text-red-700 text-2xl">Product 3</h1>
      </Link>
      <Link href={`/product/${productId}`}>
        <h1 className="text-red-700 text-2xl">Product {productId}</h1>
      </Link>

      <Link href="/">Back to Home</Link>
    </>
  );
};

export default ProductList;
