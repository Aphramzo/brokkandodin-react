import styled from 'styled-components';

const SearchBarContainer = styled.div`
    @media only screen and (min-width: 768px) {
        margin-left: 20px;
        margin-top: 25px;
    }

    @media only screen and (max-width: 768px) {
        margin-bottom: 15px;
    }
`;

const SearchInput = styled.input`
    border-radius: 5px;
    height: 20px;

    @media only screen and (max-width: 768px) {
        display:none; 
    }
`;

const SearchTagContainer = styled.span`
    background-color: #666;
    border: 1px solid #bbb;
    border-radius: 3px;
    color: #eee;
    padding: 3px;
    margin: 0 5px;

    span {
        cursor: pointer;
        margin-right: 4px;
    }

    @media only screen and (max-width: 768px) {
        font-size: .9em;
    }
`;

export {
  SearchBarContainer,
  SearchInput,
  SearchTagContainer,
};
