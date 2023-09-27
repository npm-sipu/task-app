import { usePeopleQuery } from "../hooks/query/peoplequery";
import { useState, useEffect } from "react";
import { RiDeleteBinLine } from "react-icons/ri"; // Import the delete icon

const People = () => {
  const { data, isLoading, error } = usePeopleQuery();

  // State to keep track of the list of people
  const [people, setPeople] = useState([]);

  useEffect(() => {
    if (data && data.data) {
      setPeople(data.data);
    }
  }, [data]);

  const handleDelete = (userId) => {
    // Filter out the user with the specified userId
    const updatedPeople = people.filter((person) => person.id !== userId);
    setPeople(updatedPeople);
  };

  if (isLoading) {
    return (
      <div className='h-32 flex justify-center'>
        <span className='loading loading-spinner loading-lg'></span>
      </div>
    );
  }
  if (error) return "An error has occurred: " + error.message;

  if (!people || people.length === 0) {
    return <div className='text-gray-500'>People data not available</div>;
  }

  console.log(people);

  return (
    <div className='bg-white mt-4 p-4 rounded-lg shadow-md'>
      <table className='w-full table-auto'>
        <thead>
          <tr>
            <th className='px-4 py-2 text-center'>Name</th>
            <th className='px-4 py-2 text-center'>Email</th>
            <th className='px-4 py-2 text-center'>Username</th>
            <th className='px-4 py-2 text-center'>Website</th>
            <th className='px-4 py-2 text-center'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person.id}>
              <td className='px-4 py-2 text-center'>{person.firstname}</td>
              <td className='px-4 py-2 text-center'>{person.email}</td>
              <td className='px-4 py-2 text-center'>{person.username}</td>
              <td className='px-4 py-2 text-center'>
                <a
                  href={person.website}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 hover:underline'
                >
                  {person.website}
                </a>
              </td>
              <td className='px-4 py-2 text-center'>
                <button
                  onClick={() => handleDelete(person.id)}
                  className='text-red-500 hover:text-red-700'
                >
                  <RiDeleteBinLine />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default People;
