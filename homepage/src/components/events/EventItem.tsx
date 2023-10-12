import { Link } from "react-router-dom";

interface EventItemProps {
  data: {
    id: number;
    name: string;
    description: string;
  },
  onClick: any
}

const EventItem: React.FC<EventItemProps> = ({data, onClick: reservationEvent}) => {
  return (
    <div className='category'>
      <dl>
        <dt dangerouslySetInnerHTML={{ __html: data.name }}></dt>
        <dd dangerouslySetInnerHTML={{ __html: data.description }}></dd>
      </dl>

      <div className='price'>
        9,900원
        <i>150,000원</i>
      </div>

      <Link to={`/products/${data.id}`}>자세히</Link>
      <button type='button' onClick={() => reservationEvent(data.id)}>예약</button>
    </div>
  );
}

export default EventItem;