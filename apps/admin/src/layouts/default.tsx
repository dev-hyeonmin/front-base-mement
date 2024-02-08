import { Box, Button, Cell, DropDown, Layout, Sidebar, SidebarNext, SidebarNextItem, Text } from '@mement-frontend/ui';
import { DropDownLayoutOptionProps } from '@mement-frontend/ui/src/components/form/DropDownLayout';
import { useTranslation } from 'react-i18next';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { language } from '../dummy';
import { removeToken } from '../util';

export const Default = () => {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const menus = [
    {
      name: t('nav.account'),
      link: "/"
    },
    {
      name: t('nav.branchInfo'),
      submenu: [
        {
          name: t('nav.basicInfo'),
          link: "/"
        },
        {
          name: t('nav.metaInfo'),
          link: "/meta"
        }
      ]
    },
    {
      name: t('nav.homepage'),
      submenu: [
        {
          name: t('nav.main'),
          link: "/main"
        },
        {
          name: t('nav.popup'),
          link: "/popup"
        }
      ]
    },
    {
      name: t('nav.products'),
      link: "/detail/1"
    },
    {
      name: t('nav.events'),
      link: "/events"
    },
    {
      name: t('nav.branch'),
      link: "/branch"
    }
  ];

  const chanageLanguage = (_: React.MouseEvent, option: DropDownLayoutOptionProps) => {
    i18n.changeLanguage(option.value + "");
  };

  const logout = () => {
    if (!window.confirm(t('login.logoutMessage'))) {
      return;
    }

    removeToken();
    navigate('/');
    window.location.reload();
  }

  return (
    <>
      <Sidebar
        header={
          <Text size='large' weight='bold'>Mement Admin</Text>
        }

        footer={
          <Layout gap='15px'>
            <Cell>
              <DropDown
                placeholder='Select Lang'
                defaultValue='한국어'
                onSelect={chanageLanguage}
                options={language} />
            </Cell>

            <Cell>
              <Box align="space-between">
                <Text skin='disabled' size='small'>
                  {t('login.welcome')}<br /> 홍길동{t('login.honorific')}
                </Text>

                <Button
                  onClick={() => logout()}
                  className={["mt-10"]}
                  label={t('login.logout')} />
              </Box>
            </Cell>
          </Layout>
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