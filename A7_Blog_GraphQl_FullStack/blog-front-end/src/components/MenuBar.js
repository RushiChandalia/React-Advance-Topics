import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';



function MenuBar() {


  const menuBar =  (
    <Menu pointing secondary size="massive" color="teal">
      <Menu.Item name="Home" active as={Link} to="/" />

    
    </Menu>
  );

  return menuBar;
}

export default MenuBar;
