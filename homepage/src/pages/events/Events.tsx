import { useTranslation } from 'react-i18next';
import { getEvents } from '../../api/events';
import { TEvents } from '../../types/types';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

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
            <li key={`product${product.id}`}>
              <Link to={`/events/${product.id}`}>{product.title}</Link>              
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
