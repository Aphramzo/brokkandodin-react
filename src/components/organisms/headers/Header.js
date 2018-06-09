import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ConnectedSearchBar } from '../../index';
import {
  HeaderBar,
  Title,
} from './Header.styles';

const Header = props => (
  <HeaderBar>
    <Title>
      <Link to="/">
          Brokk and Odin
      </Link>
    </Title>
    {props.showSearch && <ConnectedSearchBar />}
  </HeaderBar>
);

Header.propTypes = {
  showSearch: PropTypes.bool,
};

Header.defaultProps = {
  showSearch: true,
};

export default Header;
