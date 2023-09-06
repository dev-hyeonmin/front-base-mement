import { useTranslation } from 'react-i18next';
import { getEvents } from '../../api/events';
import { TEvents } from '../../types/types';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function Products() {
  const { t } = useTranslation(['common']);
  return (
    <>
      <h1>{t('menu.events')}.</h1>
      
    </>
  );
}
