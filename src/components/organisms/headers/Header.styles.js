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

    @media only screen and (min-width: 768px) {
        display: flex;
    }
`;

const Title = styled.h1`
    color: #ddd;
    font-family: 'Cabin Sketch';
    margin: 20px 0;

    @media only screen and (max-width: 768px) {
        font-size: 1em;
    }
`;

export {
  HeaderBar,
  Title,
};
