import { getCookie } from '../libs/cookies';
import { TProducts } from '../types/types';
import instance from './axios';

export const getGategories= () =>
  instance.get('categories').then((response) => response.data);