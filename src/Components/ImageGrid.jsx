import { useEffect, useState } from "react";

const ImageGrid = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const getRandomImageUrl = () => {
      const randomImageId = Math.floor(Math.random() * 1000);
      return `https://picsum.photos/640/360?random=${randomImageId}`;
    };

    const randomImageUrls = Array.from({ length: 4 }, getRandomImageUrl);
    setImageUrls(randomImageUrls);
  }, []);

  return (
    <div className='mt-10 mb-6 grid grid-cols-2 md:grid-cols-4 gap-4'>
      {imageUrls.map((imageUrl, index) => (
        <div key={index} className='bg-gray-100 w-100 rounded-md p-4'>
          <img src={imageUrl} alt={`Random Image ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
