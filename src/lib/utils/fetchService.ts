import { HttpMethod, REQUEST_OPTIONS } from '../constants';

export const fetchApi = async <T>(
  url: string,
  method: HttpMethod
): Promise<T> => {
  try {
    const result = await fetch(url, REQUEST_OPTIONS(method));

    if (result.ok) {
      return await result.json();
    } else {
      throw new Error(`HTTP error! Status: ${result.status}`);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
