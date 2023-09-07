import { useTranslation } from 'react-i18next';
import { TCategories, TResponse } from '../../types/types';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { getGategories } from '../../api/categories';
import { Link } from 'react-router-dom';

export default function Products() {
  const { t } = useTranslation(['common']);
  const { isLoading, data } = useQuery<TResponse<TCategories>>(['categories'], getGategories);

  return (
    <>
      <Helmet>
        <title>mement | products</title>
      </Helmet>

      {/* SEARCH BAR */}

      <div className='category-box'>
        {data?.result.categories.map(category =>
          <div className='category' key={`category${category.id}`}>
            <Link to={`/products/${category.id}`}>
              <dl>
                <dt>{category.name}</dt>
                <dd>안녕하세요 여기에는 카테고리 관련된 <br/>간단한 설명이 들어갈 예정입니다. 감사합니다 :)</dd>
              </dl>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
