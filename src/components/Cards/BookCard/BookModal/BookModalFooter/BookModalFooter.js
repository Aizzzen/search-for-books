import React from 'react';
import FooterButton from "./FooterButton/FooterButton";

const BookModalFooter = ({previewLink, infoLink}) => {
    return (
        <div className='modal-footer'>
            <div className='left-silde'>
                <FooterButton
                    link={previewLink}
                    title={'Preview'}
                />
            </div>
            <div className='divider'></div>
            <div className='right-silde'>
                <FooterButton
                    link={infoLink}
                    title={'Information'}
                />
            </div>
        </div>
    )
}

export default BookModalFooter
