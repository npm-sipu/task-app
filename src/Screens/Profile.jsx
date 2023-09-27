import { useProfileQuery } from "../hooks/query/profilequery";

const Profile = () => {
  const { data, isLoading, error } = useProfileQuery();

  if (isLoading) {
    return (
      <div className='h-32 flex justify-center'>
        <span className='loading loading-spinner loading-lg'></span>
      </div>
    );
  }
  if (error) return "An error has occurred: " + error.message;

  const profile = data.data[0];

  if (!profile)
    return <div className='text-gray-500'>Profile data not available</div>;

  return (
    <div className='bg-gray-100 min-h-screen py-8'>
      <div className='max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md'>
        <h1 className='text-2xl font-bold text-center mt-4'>
          {profile.firstname} {profile.lastname}
        </h1>
        <p className='text-gray-600 text-center'>{profile.email}</p>

        <div className='mt-6'>
          <h2 className='text-lg font-semibold'>Contact Information</h2>
          <ul className='mt-2'>
            <li>
              <strong>Email:</strong> {profile.email}
            </li>
            <li>
              <strong>Phone:</strong> {profile.phone}
            </li>
            <li>
              <strong>Birthday:</strong> {profile.birthday}
            </li>
            <li>
              <strong>Gender:</strong> {profile.gender}
            </li>
          </ul>
        </div>

        <div className='mt-6'>
          <h2 className='text-lg font-semibold'>Address</h2>
          <p>
            {profile.address?.street}, {profile.address?.city},{" "}
            {profile.address?.country}, {profile.address?.zipcode}
          </p>
        </div>

        <div className='mt-6'>
          <h2 className='text-lg font-semibold'>Website</h2>
          <a
            href={profile.website}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 hover:underline'
          >
            {profile.website}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
