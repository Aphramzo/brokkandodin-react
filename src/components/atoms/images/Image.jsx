import React from 'react';

const Image = (props) => {
    const {
        url,
        ...rest
    } = props;

    return (
        <Default src={url} />
    )
}

export default Image;
