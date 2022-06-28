import React from 'react';
import {Button, CardBody, CardTitle} from "reactstrap";

const BookBody = ({categories, bookIndex, titleArr, authorsNames, toggle}) => {
    return (
        <CardBody>
            <CardTitle className='card-title'>
                <div>
                    <p style={{color: 'gray', textDecoration: 'underline'}}>
                        {categories}
                    </p>
                    <strong style={{textDecoration: 'underline'}}>
                        {bookIndex}.
                    </strong> {titleArr.length > 24 ? titleArr.slice(0, 24) : titleArr}...
                    <p style={{color: 'gray'}}>
                        {authorsNames.length > 1
                            ? authorsNames.slice(0, 28) + '...'
                            : authorsNames
                        }
                    </p>
                </div>
            </CardTitle>
            <Button onClick={toggle}>Click for info</Button>
        </CardBody>
    );
};

export default BookBody;
