import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { slide as BurgerMenu } from 'react-burger-menu';
import MenuContainer from './Menu.styles';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
    };
  }

  render() {
    return (
      <MenuContainer>
        <BurgerMenu
          isOpen={this.state.isMenuOpen}
          right
        >
          <Link to="/">
                Home
          </Link>
          <Link to="/member-when">
                Member When
          </Link>
        </BurgerMenu>
      </MenuContainer>
    );
  }
}

export default Menu;
