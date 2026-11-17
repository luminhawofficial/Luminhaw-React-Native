
const API_URL = 'https://trefle.io/api/v1';

export async function searchPlants(query: string) {
  const token = process.env.EXPO_PUBLIC_TREFLE_TOKEN;

  if (!token) {
    throw new Error('Trefle API key is missing.');
  }

  const url =
    `${API_URL}/species/search?q=${encodeURIComponent(query)}` +
    `&token=${encodeURIComponent(token)}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Plant search failed: ${response.status}`);
  }

  const result = await response.json();

  if (result.error) {
    throw new Error(result.message || 'API request failed.');
  }

  return result.data || [];
}
