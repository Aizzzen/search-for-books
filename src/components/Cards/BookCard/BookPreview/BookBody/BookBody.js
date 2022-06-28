import React from 'react';
import {Button, CardBody, CardTitle} from "reactstrap";

const BookBody = ({categories, bookIndex, titleArr, authorsNames, toggle}) => {
    return (
        <CardBody>
            <CardTitle className='card-title'>
                <div>
                    <p className='book-body-first-p'>
                        {categories}
                    </p>
                    <strong className='book-body-index'>
                        {bookIndex}.
                    </strong> {titleArr.length > 24 ? titleArr.slice(0, 24) : titleArr}...
                    <p className='book-body-second-p'>
                        {authorsNames.length > 1
                            ? authorsNames.slice(0, 28) + '...'
                            : authorsNames
                        }
                    </p>
                </div>
            </CardTitle>
            <Button onClick={toggle}>Click for info</Button>
        </CardBody>
    )
}

export default BookBody
