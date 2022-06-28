import React from 'react';
import BookImage from "./BookImage/BookImage";
import BookBody from "./BookBody/BookBody";

const BookPreview = ({thumbnail, title, categories, bookIndex, titleArr, authorsNames, toggle}) => {
    return (
        <>
            <BookImage
                thumbnail={thumbnail}
                title={title}
            />
            <BookBody
                categories={categories}
                bookIndex={bookIndex}
                titleArr={titleArr}
                authorsNames={authorsNames}
                toggle={toggle}
            />
        </>
    )
}

export default BookPreview
