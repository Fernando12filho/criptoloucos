// src/hooks/useCryptoPrices.ts
import { useQuery } from 'react-query';
import api from '../api';

const fetchCryptoPrices = async () => {
  const response = await api.get('/simple/price?ids=bitcoin,ethereum&vs_currencies=BRL');
  return response.data;
};

export const useCryptoPrices = () => {
  return useQuery('cryptoPrices', fetchCryptoPrices);
};
