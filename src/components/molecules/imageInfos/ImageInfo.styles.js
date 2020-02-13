import styled from 'styled-components';

const Age = styled.div`
    font-size: 10px;
    margin-bottom: 5px;
`;

const DateTaken = styled.div`
    font-size: 12px;
`;

const Description = styled.div`
    font-size: 16px;
    padding: 10px 10px 5px;
    text-align: left;
`;

const DownloadLink = styled.a`
    svg {
        width: 16px;
    }
`;

const SubLine = styled.div`
    display: flex;

    a {
        flex: 1;
        margin-left: 8px;
    }

    div {
        align-self: center;
    }
`;

export {
  Age,
  DateTaken,
  Description,
  DownloadLink,
  SubLine,
};
