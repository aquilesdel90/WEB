import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import algosdk from 'algosdk';

const Leaderboard = () => {
  const server = 'https://mainnet-idx.algonode.cloud';
  const assetId = 1259645348;

  const indexerClient = useMemo(
    () => new algosdk.Indexer('', server, 443),
    [server]
  );
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const assetBalances = await indexerClient
          .lookupAssetBalances(assetId)
          .currencyLessThan(100000)
          .currencyGreaterThan(1)
          .limit(100)
          .do();

        const leaderboardData = assetBalances.balances
          .sort((a, b) => b.amount - a.amount)
          .map((balance, index) => ({
            id: index + 1,
            wallet: balance.address,
            puntuacion: balance.amount,
          }));

        setData(leaderboardData);
      } catch (error) {
        console.error('Error al obtener datos de Algorand:', error);
      }
    };

    fetchDataFromAPI();
  }, [indexerClient, assetId]);

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
        <thead className="text-xs uppercase bg-[#5E31B8]">
          <tr>
            <th className="px-6 py-3 w-10">Position</th>
            <th className="px-6 py-3 w-60 text-center">Address</th>
            <th className="px-6 py-3 w-10">Puntuación</th>
          </tr>
        </thead>
        <tbody>
          {tablaPosiciones.map(persona => (
            <tr
              key={persona.id}
              className=" border-b bg-gray-800 border-gray-700 hover:bg-gray-50 hover:bg-gray-600"
            >
              <td className="px-6 py-4 font-medium  whitespace-nowrap text-white">
                {persona.posicion}
              </td>
              <td className="px-6 py-4">{persona.wallet}</td>
              <td className="px-6 py-4">{persona.puntuacion}</td>
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
