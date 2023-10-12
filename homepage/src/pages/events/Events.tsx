import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { getEventDegree } from '../../api/events';
import Modal from '../../components/Modal';
import EventItem from '../../components/events/EventItem';
import { TEvents } from '../../types/types';

const eventGroups = [
  {
    id: 1,
    name: "이벤트 그룹"
  },
  {
    id: 2,
    name: "이벤트 그룹"
  },
  {
    id: 3,
    name: "이벤트 그룹"
  },
  {
    id: 4,
    name: "이벤트 그룹"
  },
  {
    id: 5,
    name: "이벤트 그룹"
  },
  {
    id: 6,
    name: "이벤트 그룹"
  }
];

const categories = [
  {
    id: 1,
    name: "슈링크 유니버스 울트라F MP모드 100샷",
    description: "매끄러운 윤곽개선/라인정리 <br/>슈링크2! 슈링크 유니버스! 효과UP! 통증DOWN! <br/>MP모드로 보다 빠른 시술 시간으로 적어진 통증! <br/>더 강력해진 효과! 차세대 리프팅 레이저"
  },
  {
    id: 2,
    name: "슈링크 유니버스 울트라F MP모드 300샷",
    description: "매끄러운 윤곽개선/라인정리 <br/>슈링크2! 슈링크 유니버스! 효과UP! 통증DOWN! <br/>MP모드로 보다 빠른 시술 시간으로 적어진 통증! <br/>더 강력해진 효과! 차세대 리프팅 레이저"
  },
  {
    id: 3,
    name: "슈링크 유니버스 울트라 부스터 100샷<br/>(이마/눈가/목 중 택1)",
    description: "업그레이드 슈링크 효과UP! 통증DOWN!<br/>슈링크 유니버스! 슈링크 유니버스 부스터로 세밀한 부위까지 확실하게!<br/>잔주름개선 / 탄력개선 / 콜라겐 재생<br/>(이마/눈가/목 중 택1)"
  },
  {
    id: 4,
    name: "더마 슈링크 유니버스 400샷 패키지",
    description: "볼살지켜주세요! 피부만 쫀쫀하게!<br/>슈링크 전용 GT38오로라앰플 5cc 포함<br/>시너지 효과 UP! 슈링크 전용 앰플로 화이트닝 + 수분충전!<br/>슈링크 유니버스 울트라F MP모드 200샷 + 슈링크 유니버스 울트라부스터 MP모드 200샷 + GT38 오로라 앰플 5cc"
  },
  {
    id: 5,
    name: "슈링크 유니버스 윤곽 컨투어링 500샷 패키지",
    description: "볼살지켜주세요! 피부만 쫀쫀하게!<br/>슈링크 전용 GT38오로라앰플 5cc 포함<br/>시너지 효과 UP! 슈링크 전용 앰플로 화이트닝 + 수분충전!<br/>슈링크 유니버스 울트라F MP모드 200샷 + 슈링크 유니버스 울트라부스터 MP모드 200샷 + GT38 오로라 앰플 5cc"
  },
  {
    id: 6,
    name: "인모드리프팅 FX 1회",
    description: "인모드FX 한부위 집중관리"
  },
  {
    id: 7,
    name: "인모드리프팅 FORMA 1회",
    description: "인모드FORMA 하관 집중관리"
  },
  {
    id: 8,
    name: "[인모드리프팅 FORMA+FX+LED] 풀페이스 1회",
    description: "인모드FORMA+인모드FX 풀페이스 집중관리 + 1회"
  },
  {
    id: 9,
    name: "[인모드리프팅 FORMA+FX+LED] 풀페이스 3회",
    description: "인모드FORMA+인모드FX 풀페이스 집중관리 3회"
  },
  {
    id: 10,
    name: "풀페이스 올리지오 300샷",
    description: "올리고 당기고! 3.5세대RF 고주파 리프팅 레이저<br/>통증 적은 비침습적 시술 방법으로 피부 속 콜라겐 재생!<br/>잔주름 개선 + 피부결 개선 + 피부 탄력 + 피부 쫀쫀해지는 효과!"
  }
];

export default function Events() {
  const { eventId: eventGroupId } = useParams();
  const { t } = useTranslation(['common']);
  const [showModal, setShowModal] = useState(false);
  const { isLoading, data } = useQuery<TEvents>(['events/degrees'], getEventDegree);
  // const { data: categoryData } = useQuery<TResponse<TCategories>>(['categories'], getGategories);
  // const [categories, setCategories] = useState<TCategory[]>();

  const confirmReservation = (id: number) => {
    console.log(id);
    setShowModal(() => true);
  }

  return (
    <div className='wrapper inner'>
      <div className='events-box'>
        <div className='menu-box'>
          <div className='degree-box'>
            <h1>MUSE EVENT</h1>
            <div className='degree-desc'>
              원내 사정에 따라 이벤트 상품이 변경되거나 <br />
              조기 종료될 수 있습니다.
            </div>
            <div className='degree-desc'>
              이벤트 기간 : 2023-09-06 ~ 2023-10-14 <br />
              이벤트 대상 : 해당 기간동안 방문 고객
            </div>
            <div className='degree-desc'>
              모든 이벤트 상품 VAT 10% 별도
            </div>
          </div>

          <ul>
            {eventGroups?.map((group, index) =>
              <li key={`group${index}`} className={group.id + "" === eventGroupId ? 'active' : ''}>
                <Link
                  to={`/events/${group.id}`}
                  dangerouslySetInnerHTML={{ __html: group.name }}
                />
              </li>
            )}
          </ul>
        </div>

        <div className='product-box'>
          {categories?.map(category =>
            <EventItem
              key={`category${category.id}`}
              data={category}
              onClick={confirmReservation} />
          )}
        </div>
      </div>

      {showModal &&
        <Modal>
          <div className='modal-content event'>
            <b>시술을 담았습니다!<br />
              바로 예약 하시겠어요?<br /><br />
            </b>

            ※ 남은(티케팅) 시술은 본인인증 완료 후<br />
            자동으로 조회됩니다.
          </div>
        </Modal>
      }
    </div>
  );
}
