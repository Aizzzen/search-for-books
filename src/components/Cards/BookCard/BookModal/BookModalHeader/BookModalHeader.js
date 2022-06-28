import React from 'react';

const BookModalHeader = ({title, toggle}) => {
    return (
        <div className='modal-header d-flex justify-content-center'>
            <h5 className='modal-title text-center' id='exampleModalLabel'>
                {title}
            </h5>
            <button
                aria-label='Close'
                className='close'
                type='button'
                onClick={toggle}
            >
                <span aria-hidden={true}>X</span>
            </button>
        </div>
    );
};

export default BookModalHeader;
