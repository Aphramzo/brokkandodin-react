import styled, { css } from 'styled-components';

// Margin-left is how we go about centering the image
// If it doesn't fill the defined 320 px
const Card = styled.div`
    border: 1px solid #444;
    border-radius: 6px;
    color: #eee;
    
    ${props => css`
        margin-left: ${(320 - props.imageWidth)/2}px;
        width: ${props.imageWidth}px;
    `}

    img, video {
        border-radius: 6px 6px 0 0;
    }
`;

export default Card;
