// src/api.ts
import sdk from '@api/coinstatsopenapi'

const api = sdk.getCoins({
  currency: "BRL",
  blockchain: "bitcoin"
});

export default api;
