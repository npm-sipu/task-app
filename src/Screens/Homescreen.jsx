import BookList from "../Components/BookList";
import ImageGrid from "../Components/ImageGrid";

const Homescreen = () => {
  return (
    <div>
      <p className='text-3xl font-bold underline'>home screen</p>
      <ImageGrid />
      <BookList />
    </div>
  );
};

export default Homescreen;
