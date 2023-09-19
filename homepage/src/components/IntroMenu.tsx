import { Link, useLocation } from 'react-router-dom';

export default function IntroMenu() {
  const location = useLocation();
  const path = location.pathname;

  const subMenu = [
    {
      link: "/intro",
      name: "뮤즈클리닉 소개"
    },
    {
      link: "/intro/staff",
      name: "의사&스탭 소개"
    },
    {
      link: "/intro/guid",
      name: "오시는 길, 진료시간"
    },
    {
      link: "/intro/notice",
      name: "공지사항"
    },
  ];

  return (
    <div className='intro-menu-box'>
      <div className='intro-background'>
        <h1>{subMenu.filter(menu => menu.link === path)[0]?.name}</h1>
      </div>

      <div className='intro-menu'>
        <div className='intro-menu-inner inner'>
          {subMenu.map(menu =>
            <Link 
              to={menu.link} 
              key={menu.link}
              className={menu.link === path ? 'active' : ''}
              >
                {menu.name}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
