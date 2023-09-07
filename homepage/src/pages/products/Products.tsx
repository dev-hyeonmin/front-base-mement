import { useTranslation } from 'react-i18next';
import { TCategories, TCategory, TResponse } from '../../types/types';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { getGategories } from '../../api/categories';
import { Link } from 'react-router-dom';
import Search from '../../components/Search';
import { useEffect, useState } from 'react';

export default function Products() {
  const { t } = useTranslation(['common']);
  const { isLoading, data } = useQuery<TResponse<TCategories>>(['categories'], getGategories);
  const [categories, setCategories] = useState<TCategory[]>();

  useEffect(() => {
    if (data?.result.categories) {
      setCategories(data?.result.categories);
    }
  }, [data]);

  const onSearch = (keyword: string) => {
    const newCategories = categories?.filter(category => {
      // console.log()
      if (category.name.includes(keyword)) {
        category.name = category.name.replaceAll(keyword, `<b>${keyword}</b>`)
        return true;
      } else {
        return false;
      }
    });
    
    setCategories(() => newCategories);
  }

  return (
    <>
      <Helmet>
        <title>mement | products</title>
      </Helmet>

      <Search onSubmit={onSearch} />

      <div className='category-box'>
        {categories?.map(category =>
          <div className='category' key={`category${category.id}`}>
            <Link to={`/products/${category.id}`}>
              <dl>
                <dt dangerouslySetInnerHTML={ {__html: category.name} }></dt>
                <dd>안녕하세요 여기에는 카테고리 관련된 <br />간단한 설명이 들어갈 예정입니다. 감사합니다 :)</dd>
              </dl>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
