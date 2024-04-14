import { ExpoRequest, ExpoResponse } from "expo-router/server";

const API_KEY = process.env.CRYPTO_API_KEY;

export async function GET(request: ExpoRequest) {
  const limit = request.expoUrl.searchParams.get("limit") || 5;

  const response = await fetch(
    `https://api.coinpaprika.com/v1/tickers/btc-bitcoin/historical?start=2024-01-01&interval=1d`
  );
  const res = await response.json();
  return ExpoResponse.json(res);
}
