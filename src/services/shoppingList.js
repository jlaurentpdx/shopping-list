import { client, checkError } from './client';

export const fetchList = async () => {
  const response = await client.from('shopping-list').select('*');
  return checkError(response);
};
