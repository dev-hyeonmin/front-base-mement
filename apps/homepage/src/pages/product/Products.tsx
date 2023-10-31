import { Link } from "react-router-dom";

const groups = [
  {
    id: 1,
    name: "Event Group"
  },
  {
    id: 2,
    name: "Event Group"
  },
  {
    id: 3,
    name: "Event Group"
  },
  {
    id: 4,
    name: "Event Group"
  },
  {
    id: 5,
    name: "Event Group"
  },
  {
    id: 6,
    name: "Event Group"
  },
  {
    id: 7,
    name: "Event Group"
  },
  {
    id: 8,
    name: "Event Group"
  },
  {
    id: 9,
    name: "Event Group"
  },
]

const Products = () => {
  return (
    <div className='product-box'>
      <div className='product-video'>

      </div>

      <div className="product-list">
        <div className="product-list__top">
          <div className="product-list__top-logo">mement</div>

          <div className="product-list__top-content">
            {/* {event degree content} */}
          </div>
        </div>

        <div className="product-list__group">
          {groups.map(group =>
            <div className="product-list__group-item" key={`group-${group.id}`}>
              <Link to={`/product/${group.id}`}>{group.name}</Link>
            </div>
          )}
        </div>

        <div className="product-list__items">
            <div className="product-list__item">
              <div className="product-list__item-name"></div>
              <div className="product-list__item-description"></div>
              <div className="product-list__item-price"></div>

              <div className="product-list__item-button--detail"></div>
              <div className="product-list__item-button--buy"></div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Products;