import { Button, Sidebar, SidebarNext, SidebarNextItem, Text } from '@mement-frontend/ui';
import { Link, Outlet, useLocation } from 'react-router-dom';

const menus = [
  {
    name: "Branch Information",
    submenu: [
      {
        name: "Basic Information",
        link: "/"
      },
      {
        name: "Metatag & API key",
        link: "/meta"
      }
    ]
  },
  {
    name: "Homepage Setting",
    submenu: [
      {
        name: "Main",
        link: "/main"
      },
      {
        name: "Popup",
        link: "/popup"
      }
    ]
  },
  {
    name: "Products",
    link: "/detail"
  },
  {
    name: "Events",
    link: "/events"
  },
  {
    name: "Account",
    link: "/account"
  }
]

export const Default = () => {
  const { pathname } = useLocation();
  
  return (
    <>
      <Sidebar
        header={
          <Text size='large' weight='bold'>Mement Admin</Text>
        }

        footer={
          <>
            <Text skin='disabled' size='small'>
              Hello👋<br /> Hong Gil Dong
            </Text>

            <Button
              className={["mt-10"]}
              label='logout' />
          </>
        }
      >

        {menus.map(menu => {
          if (menu.submenu) {
            return (
              <SidebarNextItem
                key={menu.name}
                title={menu.name}
                itemKey='1'
              >
                {menu.submenu.map(sub =>
                  <SidebarNext key={sub.name} selected={pathname === sub.link}>
                    <Link to={sub.link}>{sub.name}</Link>
                  </SidebarNext>
                )}
              </SidebarNextItem>
            )
          } else {
            return (
              <SidebarNext key={menu.name} selected={pathname === menu.link}>
                <Link to={menu.link}>{menu.name}</Link>
              </SidebarNext>
            );
          }
        })}
      </Sidebar>

      <Outlet />
    </>
  );
};

export default Default;