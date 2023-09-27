import PropTypes from "prop-types";

const Company = ({ company }) => {
  const { name, email, vat, phone, country, addresses, website, contact } =
    company;

  return (
    <div className='bg-white w-1/3 p-4 mx-16 mt-8 rounded-lg shadow-md'>
      <div className='text-2xl font-semibold'>{name}</div>
      <div className='text-gray-700 my-2'>{email}</div>
      <div className='text-gray-700 my-2'>VAT: {vat}</div>
      <div className='text-gray-700 my-2'>Phone: {phone}</div>
      <div className='text-gray-700 my-2'>Country: {country}</div>

      {addresses && (
        <div className='my-4'>
          <h2 className='text-lg font-semibold'>Addresses:</h2>
          <ul>
            {addresses.map((address, index) => (
              <li key={index} className='text-gray-700'>
                {address.street}, {address.city}, {address.country}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className='my-2'>
        <div className='text-gray-700'>Website: {website}</div>
      </div>

      {contact && (
        <div className='my-4'>
          <h2 className='text-lg font-semibold'>Contact Information:</h2>
          <div className='text-gray-700'>
            Name: {contact.firstname} {contact.lastname}
          </div>
          <div className='text-gray-700'>Email: {contact.email}</div>
          <div className='text-gray-700'>Phone: {contact.phone}</div>
          <div className='text-gray-700'>Birthday: {contact.birthday}</div>
          <div className='text-gray-700'>Gender: {contact.gender}</div>

          {contact.address && (
            <div className='my-4'>
              <h3 className='text-md font-semibold'>Contact Address:</h3>
              <div className='text-gray-700'>
                {contact.address.street}, {contact.address.city},{" "}
                {contact.address.country}
              </div>
            </div>
          )}

          <div className='text-gray-700'>
            Contact Website: {contact.website}
          </div>
        </div>
      )}
    </div>
  );
};

Company.propTypes = {
  company: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    vat: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    addresses: PropTypes.arrayOf(
      PropTypes.shape({
        street: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
      })
    ),
    website: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    contact: PropTypes.shape({
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      birthday: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      address: PropTypes.shape({
        street: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
      }),
      website: PropTypes.string.isRequired,
    }),
  }),
};

export default Company;
