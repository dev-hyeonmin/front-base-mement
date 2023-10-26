
const Products = () => {
  return (
    <div className='intro-content inner main-content'>
      <div className='category-box'>
        {/* {categories?.map(category =>
          <div className='category' key={`category${category.id}`}>
            <Link to={`/products/${category.id}`}>
              <dl>
                <dt dangerouslySetInnerHTML={ {__html: category.name} }></dt>
                <dd>안녕하세요 여기에는 카테고리 관련된 <br />간단한 설명이 들어갈 예정입니다. 감사합니다 :)</dd>
              </dl>
            </Link>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default Products;