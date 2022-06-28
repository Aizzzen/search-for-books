import React, { useState } from 'react';
import { Card } from 'reactstrap';
import BookPreview from "./BookPreview/BookPreview";
import BookModal from "./BookModal/BookModal";

const BookCard = ({bookIndex, thumbnail, title, categories, authors, description, previewLink, infoLink}) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const titleArr = [...title]

  let authorsNames
  if(authors === undefined) {
    authorsNames = ''
  } else if(authors.length > 1){
    authorsNames = authors.join(', ')
  } else {
    authorsNames = authors
  }

  return (
    <Card className='book-card-card m-auto '>
      <BookPreview thumbnail={thumbnail} title={title} categories={categories} bookIndex={bookIndex} titleArr={titleArr} authorsNames={authorsNames} toggle={toggle} />
      <BookModal modal={modal} toggle={toggle} title={title} thumbnail={thumbnail} authorsNames={authorsNames} categories={categories} description={description} previewLink={previewLink} infoLink={infoLink} />
    </Card>
  )
}

export default BookCard
