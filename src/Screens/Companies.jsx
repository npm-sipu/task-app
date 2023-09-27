import Company from "../Components/Company";

import { useCompanyQuery } from "../hooks/query/companyquery";

const Companies = () => {
  const { data, isLoading, error } = useCompanyQuery();

  if (isLoading) {
    return (
      <div className='h-32 flex justify-center'>
        <span className='loading loading-spinner loading-lg'></span>
      </div>
    );
  }
  if (error) return "An error has occurred: " + error.message;

  const companyData = data.data;

  if (!companyData)
    return <div className='text-gray-500'>company data not available</div>;
  return (
    <div className='flex justify-center flex-wrap mx-4 my-4'>
      {companyData &&
        companyData.map((company) => (
          <Company key={company.id} company={company} />
        ))}
    </div>
  );
};

export default Companies;
