import React, { useState } from 'react';
import { Card, CardTitle, CardImg, CardBody, Button, Modal } from 'reactstrap';
const BookCard = ({
  bookIndex,
  thumbnail,
  title,
  categories,
  authors,
  description,
  previewLink,
  infoLink
}) => {
  // States
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
    <Card style={{ width: '280px', height: '500px' }} className='m-auto '>
      <CardImg
        top
        style={{ width: '100%', height: '300px', padding: '30px', paddingBottom: '5px'}}
        src={thumbnail}
        alt={title}
      />
      <CardBody>
        <CardTitle className='card-title'>
          <div>
            <p style={{color: 'gray', textDecoration: 'underline'}}>{categories}</p>
            <strong style={{textDecoration: 'underline'}}>{bookIndex}.</strong> {titleArr.length > 24 ? titleArr.slice(0, 24) : titleArr}...
            <p style={{color: 'gray'}}>{
              authorsNames.length > 1
                  ? authorsNames.slice(0, 28) + '...'
                  : authorsNames
            }</p>
          </div>
        </CardTitle>
        <Button onClick={toggle}>Click for info</Button>
      </CardBody>
      <Modal isOpen={modal} toggle={toggle}>
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
        <div className='modal-footer'>
          <div className='left-silde'>
            <Button>
              <a
                  href={previewLink}
                  className='btn-link'
                  color='default'
                  type='button'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{textDecoration: 'none', color: 'white'}}
              >
                Preview
              </a>
            </Button>
          </div>
          <div className='divider'></div>
          <div className='right-silde'>
            <Button>
              <a
                  href={infoLink}
                  className='btn-link'
                  color='default'
                  type='button'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{textDecoration: 'none', color: 'white'}}
              >
                Information
              </a>
            </Button>
          </div>
        </div>
      </Modal>
    </Card>
  );
};

export default BookCard;
