import { Button, Sidebar, SidebarNext, SidebarNextItem, Text } from '@mement-frontend/ui';
import { Link, Outlet } from 'react-router-dom';

export const Default = () => {
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

        <SidebarNext>
          <Link to='/'>Home</Link>
        </SidebarNext>
        <SidebarNextItem
          title='Site'
          itemKey='1'
          onClick={() => { }}
        >
          <SidebarNext>
            <Link to='/'>Site menu1</Link>
          </SidebarNext>

          <SidebarNext>
            <Link to='/'>Site menu2</Link>
          </SidebarNext>

          <SidebarNext>
            <Link to='/menu3'>Site menu3</Link>
          </SidebarNext>
        </SidebarNextItem>
        <SidebarNext>
          <Link to='/account'>Account</Link>
        </SidebarNext>
      </Sidebar>

      <Outlet />
    </>
  );
};

export default Default;