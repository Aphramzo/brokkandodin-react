import styled from 'styled-components';

const HeaderBar = styled.div`
    background-color: #444;
    left: 0;
    padding-left: 30px;
    position: fixed;
    text-align: left;
    top: 0;
    width: 100%;
    z-index: 20;
`;

const Title = styled.h1`
    color: #ddd;
    font-family: 'Cabin Sketch';
    margin: 20px 0;
`;

export {
  HeaderBar,
  Title,
};
