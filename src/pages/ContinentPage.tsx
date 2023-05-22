import { Link, useParams } from 'react-router-dom';
import { GET_COUNTRIES_BY_CONTINENT_CODE } from '../graphQL/queries';
import { useQuery } from '@apollo/client';
import { Country } from '../types/DataTypes';

export default function ContinentPage() {
  const { code } = useParams();
  const { data: countriesList } = useQuery(GET_COUNTRIES_BY_CONTINENT_CODE, {
    variables: { filter: { continent: { eq: code } } },
  });

  console.log(countriesList);

  return (
    <div className='bg-gray-200 m-1 p-1 min-h-screen flex justify-center'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-lg place-content-center'>
        <h1 className='col-span-3 m-auto text-xl'>Continents</h1>
        {countriesList! &&
          countriesList.countries.map((country: Country) => (
            <div
              key={country.code}
              className='relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400'
            >
              <div className='flex-shrink-0'>
                <p className='h-10 w-10 rounded-full'>{country.emoji}</p>
              </div>
              <div className='min-w-0 flex-1'>
                <Link
                  to={`/country/${country.code}`}
                  className='focus:outline-none'
                >
                  <span className='absolute inset-0' aria-hidden='true' />
                  <p className='text-sm font-medium text-gray-900'>
                    {country.name}
                  </p>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
