import PropTypes from "prop-types";

const Person = ({ user }) => {
  return (
    <tr className=''>
      <td className='px-4 py-4 text-center'>
        {user.firstname} {user.lastname}
      </td>
      <td className='px-4 py-4 text-center'>{user.email}</td>
      <td className='px-4 py-4 text-center'>{user.username}</td>
      <td className='px-4 py-4 text-center'>
        <a
          href={user.website}
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-600 hover:underline'
        >
          {user.website}
        </a>
      </td>
    </tr>
  );
};

Person.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
  }).isRequired,
};

export default Person;
