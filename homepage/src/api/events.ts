import { getCookie } from '../libs/cookies';
import { TProducts } from '../types/types';
import instance from './axios';

export const getEventDegree = () =>
  instance.get('events/degrees/1').then((response) => response.data);

export const getEvents = () =>
  instance.get('products').then((response) => response.data);

// export const createEvents = ({
//   title,
//   price
// }: TProducts) =>
//   instance
//     .post(
//       `products`,
//       { title, price },
//       {
//         headers: {
//           "x-jwt": getCookie('x-jwt')
//         },
//       }
//     )
//     .then((response) => response.data);