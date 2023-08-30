import instance from './axios';

export const getEvents = () =>
  instance.get('products').then((response) => response.data);
