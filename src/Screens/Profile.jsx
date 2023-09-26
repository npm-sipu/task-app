import { useEffect, useState } from "react";

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = JSON.parse(sessionStorage.getItem("registerData"));

    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []);

  return (
    <div className='max-w-lg mx-auto p-4 mt-4 bg-white rounded-lg shadow'>
      <h2 className='text-2xl font-semibold mb-4'>Profile</h2>
      {userData ? (
        <div>
          <p className='mb-2'>
            <span className='font-semibold'>Full Name:</span>{" "}
            {userData.firstName} {userData.lastName}
          </p>
          <p className='mb-2'>
            <span className='font-semibold'>Email:</span> {userData.email}
          </p>
          <p className='mb-2'>
            <span className='font-semibold'>Address:</span> {userData.address}
          </p>
          <p className='mb-2'>
            <span className='font-semibold'>Age:</span> {userData.age}
          </p>
        </div>
      ) : (
        <p className='text-red-500'>User data not found. Please log in.</p>
      )}
    </div>
  );
};

export default Profile;
