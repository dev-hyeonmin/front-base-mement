import { useTranslation } from 'react-i18next';
import { getEvents } from '../api/events';
import { TEvents } from '../types';
import { useQuery } from '@tanstack/react-query';
import useUser from '../libs/useUser';

export default function Events() {
  const { t } = useTranslation(['common']);
  const { isLoading, data } = useQuery<TEvents>(['events'], getEvents);
  
  return (
    <>
      <h1>{t('menu.events')}.</h1>
      {isLoading && <h3>Loading...</h3>}

      {!isLoading && (
        <ul>
          {data?.products.map((product) => (
            <li key={`product${product.id}`}>{product.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}
