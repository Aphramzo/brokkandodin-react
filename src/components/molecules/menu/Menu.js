import React from 'react';
import { Link } from 'react-router-dom';
import { slide as BurgerMenu } from 'react-burger-menu';
import MenuContainer from './Menu.styles';

const Menu = props => (
  <MenuContainer>
    <BurgerMenu right>
      <Link to="/">
                Home
      </Link>
      <Link to="/member-when">
                Member When
      </Link>
    </BurgerMenu>
  </MenuContainer>
);

export default Menu;
