import { Box, List } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Menuitems from './MenuItems';
import NavItemGroup from './NavItemGroup';
import NavMenuItem from './NavMenuItem';

const SidebarItems = () => {
  const location = useLocation();
  const { pathname } = location;
  //   console.log(pathname.slice(0, pathname.lastIndexOf('/')));
  return (
    <Box sx={{ p: 2 }}>
      <List sx={{ pt: 0 }}>
        {Menuitems.map((item) => {
          if (item.subheader) {
            return <NavItemGroup subheader={item.subheader} key={item.subheader} />;
          }

          // else if (item.children){} --for nested route
          else {
            return <NavMenuItem pathTo={pathname} item={item} key={item.id} />;
          }
        })}
      </List>
    </Box>
  );
};

export default SidebarItems;
