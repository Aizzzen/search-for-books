import React from 'react';
import {Spinner} from "reactstrap";
import BookCard from "./BookCard/BookCard";
import TotalItems from "./TotalItems/TotalItems";

const Cards = ({loading, cards, totalBooks}) => {
        if (loading) {
            return (
                <div className='d-flex justify-content-center mt-3'>
                    <Spinner style={{ width: '3rem', height: '3rem' }} />
                </div>
            )
        } else {
            const items = cards.map((item, i) => {
                let thumbnail = '';
                if (item.volumeInfo.imageLinks) {
                    thumbnail = item.volumeInfo.imageLinks.thumbnail;
                } else {
                    thumbnail = 'https://st3.depositphotos.com/1322515/35964/v/600/depositphotos_359648638-stock-illustration-image-available-icon.jpg'
                }
                return (
                    <div className='col-lg-4 mb-3' key={item.id}>
                        <BookCard
                            bookIndex={i+1}
                            thumbnail={thumbnail}
                            title={item.volumeInfo.title}
                            categories={item.volumeInfo.categories}
                            authors={item.volumeInfo.authors}
                            description={item.volumeInfo.description}
                            previewLink={item.volumeInfo.previewLink}
                            infoLink={item.volumeInfo.infoLink}
                        />
                    </div>
                )
            })
            return (
                <>
                    <TotalItems totalBooks={totalBooks} cards={cards} />
                    <div className='container my-5'>
                        <div className='row'>{items}</div>
                    </div>
                </>
            )
        }
}

export default Cards
