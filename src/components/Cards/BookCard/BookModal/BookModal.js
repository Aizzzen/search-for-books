import React from 'react';
import {Modal} from "reactstrap";
import BookModalHeader from "./BookModalHeader/BookModalHeader";
import BookModalBody from "./BookModalBody/BookModalBody";
import BookModalFooter from "./BookModalFooter/BookModalFooter";

const BookModal = ({modal, toggle, title, thumbnail, authorsNames, categories, description, previewLink, infoLink}) => {
    return (
        <>
            <Modal
                isOpen={modal}
                toggle={toggle}
            >
                <BookModalHeader
                    title={title}
                    toggle={toggle}
                />
                <BookModalBody
                    thumbnail={thumbnail}
                    title={title}
                    authorsNames={authorsNames}
                    categories={categories}
                    description={description}
                />
                <BookModalFooter
                    previewLink={previewLink}
                    infoLink={infoLink}
                />
            </Modal>
        </>
    );
};

export default BookModal;
