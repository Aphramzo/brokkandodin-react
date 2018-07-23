import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '../..';
import GridContent from './HomePage.styles';

const HomePage = (props) => {
  const {
    children,
    showSearch,
  } = props;

  return (
    <div>
      <Header showSearch={showSearch} />
      <GridContent>
        {children}
      </GridContent>
    </div>
  );
};

HomePage.propTypes = {
  children: PropTypes.node.isRequired,
  showSearch: PropTypes.bool,
};

HomePage.defaultProps = {
  showSearch: true,
};

export default HomePage;
