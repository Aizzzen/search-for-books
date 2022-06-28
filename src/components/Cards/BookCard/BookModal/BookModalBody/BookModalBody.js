import React from 'react';

const BookModalBody = ({thumbnail, title, authorsNames, categories, description}) => {
    return (
        <div className='modal-body'>
            <div className='d-flex justify-content-between ml-3'>
                <img src={thumbnail} alt={title} style={{ height: '233px' }} />
                <div>
                    {authorsNames
                        ? <p><strong>Authors:</strong> {authorsNames}</p>
                        : ''
                    }
                    {categories
                        ? <p><strong>Categories:</strong> {categories}</p>
                        : ''
                    }
                </div>
            </div>
            {description
                ? <div className='mt-3'>
                    <strong>Description: </strong>
                    {description}
                </div>
                : ''
            }
        </div>
    );
};

export default BookModalBody;
