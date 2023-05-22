import { useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';
import { GET_COUNTRY_BY_CODE } from '../graphQL/queries';

export default function CountryPage() {
  const { code } = useParams();

  const { data: country } = useQuery(GET_COUNTRY_BY_CODE, {
    variables: { code },
  });

  return (
    <div className='bg-gray-200 m-1 p-1 min-h-screen flex flex-col justify-center items-center'>
      {country! && (
        <div className='max-w-lg bg-white rounded-lg px-6 py-5 flex flex-col justify-center items-center'>
          <h1 className='text-xl'>{country.country.name}</h1>
          <p>{country.country.emoji}</p>
          <p>Currency : {country.country.currency}</p>
          <p>Capital : {country.country.capital}</p>
        </div>
      )}

      <button
        type='button'
        className='rounded-md bg-white mt-5 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
      >
        <Link to={'/'}>Home</Link>
      </button>
    </div>
  );
}
