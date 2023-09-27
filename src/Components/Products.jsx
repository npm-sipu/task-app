import Product from "./Product";
import { useProductsQuery } from "../hooks/query/productquery";

const Products = () => {
  const { data, isLoading, error } = useProductsQuery();

  if (isLoading) {
    return (
      <div className='h-32 flex justify-center'>
        <span className='loading loading-spinner loading-lg'></span>
      </div>
    );
  }
  if (error) return "An error has occurred: " + error.message;

  const products = data.data;

  console.log(products);

  if (!products)
    return <div className='text-gray-500'>products not available</div>;
  return (
    <>
      <div className='flex justify-center mt-10 mb-4'>
        <h3 className='text-2xl font-bold'>Products</h3>
      </div>
      <div className='flex flex-wrap mx-4'>
        {products &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Products;
