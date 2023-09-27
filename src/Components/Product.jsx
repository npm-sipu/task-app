import "react-responsive-carousel/lib/styles/carousel.min.css";
import PropTypes from "prop-types";

const Product = ({ product }) => {
  const { name, description, image, price } = product;

  return (
    <div className='card w-96 m-2 bg-base-100 shadow-xl'>
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>
        <p>{description}</p>
        <div className='flex items-center'>
          <p>{price}</p>
        </div>

        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default Product;
