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

  const [searchTerm, setSearchTerm] = useState('');

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    .filter(persona =>
      persona.wallet.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map((persona, index) => ({
      ...persona,
      posicion: indexOfFirstItem + index + 1,
    }));

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="relative overflow-x-auto overflow-y-hidden shadow-md sm:rounded-lg">
      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="px-2 py-1 border rounded-md text-gray-800"
          placeholder="Search your Wallet"
        />
      </div>
      <table className="w-full text-sm text-left text-white table-auto">
        <thead className="text-xs uppercase bg-[#5E31B8]">
          <tr>
            <th className="px-4 py-2 sm:w-10">Position</th>
            <th className="px-4 py-2 sm:w-60 text-center">Address</th>
            <th className="px-4 py-2 sm:w-10">Puntuación</th>
          </tr>
        </thead>
        <tbody>
          {tablaPosiciones.length === 0 ? (
            <tr>
              <td className="px-4 py-2 text-gray-800" colSpan="3">
                There is no matching wallet
              </td>
            </tr>
          ) : (
            tablaPosiciones.map(persona => (
              <tr
                key={persona.id}
                className="border-b bg-gray-800 border-gray-700  hover:bg-gray-600"
              >
                <td className="px-4 py-2 sm:font-medium text-white">
                  {persona.posicion}
                </td>
                <td className="px-4 py-2 sm:text-center">
                  <div className="text-ellipsis">
                    {isMobile
                      ? persona.wallet.substring(0, 16) + '...'
                      : persona.wallet}
                  </div>
                </td>
                <td className="px-4 py-2">{persona.puntuacion}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <Stack spacing={2} className="p-2 flex justify-center items-center">
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
