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

const SearchButton = styled.span`
    background-color: #eee;
    border: 1px solid #ccc;
    border-bottom-right-radius: 3px;
    border-left: none;
    border-top-right-radius: 3px;
    cursor: pointer;
    padding: 3px 6px;
`;

const SearchInput = styled.input`
    border: 1px solid #ccc;
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
    padding: 6px 12px;
    width: 250px;
`;

const SearchInputContainer = styled.div`
    @media only screen and (min-width: 768px) {
        display: inline-block;
    }

    @media only screen and (max-width: 768px) {
        margin-bottom: 10px;
        width: 100%;
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
  SearchButton,
  SearchBarContainer,
  SearchInput,
  SearchInputContainer,
  SearchTagContainer,
};
