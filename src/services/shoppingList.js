import { client, checkError } from './client';

export const fetchList = async () => {
  const resp = await client.from('shopping-list').select('*');
  return checkError(resp);
};

export const addItem = async (item) => {
  const resp = await client.from('shopping-list').insert([item]);
  return checkError(resp);
};

export const deleteItem = async (item) => {
  const resp = await client.from('shopping-list').delete().eq('id', item.id);
  return checkError(resp);
};
