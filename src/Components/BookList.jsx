import { useBooksQuery } from "../hooks/query/bookquery";

const BookList = () => {
  const { data, isLoading, error } = useBooksQuery();

  if (isLoading) {
    return (
      <div className='h-32 flex justify-center'>
        <span className='loading loading-spinner loading-lg'></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className='text-red-500'>An error has occurred: {error.message}</div>
    );
  }

  const books = data?.data || [];

  if (!books.length) {
    return <div className='text-gray-500'>No books available</div>;
  }

  return (
    <>
      <h1 className='text-3xl font-semibold text-center mt-4 mb-4'>Books</h1>
      <div className='flex flex-wrap -mx-4'>
        {books.map((book) => (
          <div key={book.id} className='w-full md:w-1/2 lg:w-1/3 p-4'>
            <div className='bg-white p-4 rounded-md shadow-md'>
              <h2 className='text-xl font-semibold'>{book.title}</h2>
              <p className='text-gray-600'>{book.author}</p>
              <p className='text-gray-700 mt-2'>{book.description}</p>
              <p className='text-gray-700 mt-2'>Genre: {book.genre}</p>
              <p className='text-gray-700 mt-2'>ISBN: {book.isbn}</p>
              <p className='text-gray-700 mt-2'>Published: {book.published}</p>
              <p className='text-gray-700 mt-2'>Publisher: {book.publisher}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BookList;
