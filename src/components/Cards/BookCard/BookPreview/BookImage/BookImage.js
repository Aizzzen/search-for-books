import React from 'react';
import {CardImg} from "reactstrap";

const BookImage = ({thumbnail, title}) => {
    return (
        <CardImg
            top
            className='book-image-card-img'
            src={thumbnail}
            alt={title}
        />
    )
}

export default BookImage
