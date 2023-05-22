import { useQuery } from '@apollo/client';
import { GET_ALL_CONTINENTS } from '../graphQL/queries';
import { Continent } from '../types/DataTypes';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function ContinentsListPage() {
  const [filter, setFilter] = useState('');
  const { data: continentsList } = useQuery(GET_ALL_CONTINENTS);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const filteredContinents = () => {
    const filteredList = continentsList!.continents.filter(
      (continent: Continent) =>
        continent.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredList;
  };

  return (
    <div className='bg-gray-200 m-1 p-1 min-h-screen flex justify-center'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-lg place-content-center'>
        <h1 className='col-span-3 m-auto text-xl'>Continents</h1>
        <input
          type='text'
          value={filter}
          onChange={handleFilterChange}
          placeholder='Filter continents'
          className='border border-gray-300 px-4 py-2 rounded lg:col-span-3 sm:col-span-2'
        />
        {continentsList! &&
          filteredContinents().map((continent: Continent) => (
            <div
              key={continent.code}
              className='relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400'
            >
              <div className='min-w-0 flex-1'>
                <Link
                  to={`/continent/${continent.code}`}
                  className='focus:outline-none'
                >
                  <span className='absolute inset-0' aria-hidden='true' />
                  <p className='text-sm font-medium text-gray-900'>
                    {continent.name}
                  </p>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
