import BookList from "../Components/BookList";
import ImageGrid from "../Components/ImageGrid";
import Products from "../Components/Products";

const Homescreen = () => {
  return (
    <div>
      <ImageGrid />
      <BookList />
      <Products />
    </div>
  );
};

export default Homescreen;
