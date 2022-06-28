import React from 'react';
import {CardImg} from "reactstrap";

const BookImage = ({thumbnail, title}) => {
    return (
        <CardImg
            top
            style={{ width: '100%', height: '300px', padding: '30px', paddingBottom: '5px'}}
            src={thumbnail}
            alt={title}
        />
    );
};

export default BookImage;
