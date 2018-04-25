import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedSearchBar } from '../../index';
import {
  HeaderBar,
  Title,
} from './Header.styles';

const Header = props => (
  <HeaderBar>
    <Title>
        Brokk and Odin
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
