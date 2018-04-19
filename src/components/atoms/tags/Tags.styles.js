import styled from 'styled-components';

const Tag = styled.a`
    cursor: pointer;
    text-decoration: underline;
`;

const TagContainer = styled.div`
    margin-top: 10px;
    word-break: break-word;

    a + a {
        margin-left: 7px;
    }
`;

export {
  Tag,
  TagContainer,
};
