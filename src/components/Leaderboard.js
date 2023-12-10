import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Leaderboard = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );
        setData(response.data);
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
      }
    };

    fetchDataFromAPI();
  }, []);

  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const tablaPosiciones = currentItems
    .slice()
    .sort((a, b) => b.puntuacion - a.puntuacion)
    .map((persona, index) => ({
      ...persona,
      posicion: indexOfFirstItem + index + 1,
    }));

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-white ">
        <thead className="text-xs uppercase bg-gray-50 dark:bg-[#5E31B8]">
          <tr>
            <th className="px-6 py-3 w-10">Posición</th>
            <th className="px-6 py-3 w-60 text-center">Wallet</th>
            <th className="px-6 py-3 w-10">Puntuación</th>
          </tr>
        </thead>
        <tbody>
          {tablaPosiciones.map(persona => (
            <tr
              key={persona.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {persona.posicion}
              </td>
              {/*Cambiar persona.title por wallet o lo que sea que vayas a usar para mostrar el dato*/}
              <td className="px-6 py-4">{persona.wallet}</td>
              {/*Cambiar title por wallet o lo que sea que vayas a usar para mostrar el dato*/}
              <td className="px-6 py-4">{persona.id}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Stack spacing={2} className="p-2 flex justify-center items-center ">
        <Pagination
          count={Math.ceil(data.length / itemsPerPage)}
          color="secondary"
          page={page}
          onChange={handlePageChange}
        />
      </Stack>
    </div>
  );
};

export default Leaderboard;
