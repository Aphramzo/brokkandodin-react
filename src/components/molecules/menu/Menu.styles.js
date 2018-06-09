import styled from 'styled-components';

export default styled.div`
    text-align: left;

    a {
        color: #ddd;
        text-decoration: none;
    }

    @media only screen and (min-width: 768px) {
        .bm-burger-button {
            height: 30px;
            width: 36px;
        }
    }

    @media only screen and (max-width: 768px) {
        .bm-burger-button {
            height: 15px;
            width: 18px;
        }
    }

    /* Position and sizing of burger button */
    .bm-burger-button {
        position: fixed;
        right: 12px;
        top: 12px;
    }
    
    /* Color/shape of burger icon bars */
    .bm-burger-bars {
        background: #ddd;
    }
    
    /* Position and sizing of clickable cross button */
    .bm-cross-button {
        height: 24px;
        width: 24px;
    }
    
    /* Color/shape of close button cross */
    .bm-cross {
        background: #bdc3c7;
    }
    
    /* General sidebar styles */
    .bm-menu {
        background: #373a47;
        padding: 2.5em 1.5em 0;
        font-size: 1.15em;
    }
    
    /* Morph shape necessary with bubble or elastic */
    .bm-morph-shape {
        fill: #373a47;
    }
    
    /* Wrapper for item list */
    .bm-item-list {
        color: #b8b7ad;
        padding: 0.8em;
        max-height: 90%;
    }
    
    /* Individual item */
    .bm-item {
        display: inline-block;
    }
    
    /* Styling of overlay */
    .bm-overlay {
        background: rgba(0, 0, 0, 0.3);
    }
`;
