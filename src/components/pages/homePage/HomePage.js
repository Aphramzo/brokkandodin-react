import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '../..';
import GridContent from './HomePage.styles';

const HomePage = (props) => {
  const {
    children,
  } = props;

  return (
    <div>
      <Header />
      <GridContent>
        {children}
      </GridContent>
    </div>
  );
};

HomePage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomePage;
