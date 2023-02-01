import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Books/Book.css";
import Homepage from './Homepage';



const UserView = () => {
    async function getData() {

        const response = await axios.get("https://book-store-org.onrender.com/books/get");
        setBooks(response.data);

    }
    const [books, setBooks] = useState([]);

    useEffect(() => {

        getData();

    }, []);

    return (
        <>
        <Homepage/>
        <div>
            
            <ul>

                {books.map((book, i) => {
                    return (
                        <li className='book' key={i}>
                            <div className='card'>
      
      <img src={book.image} alt={book.name}/>
      <article>By {book.author}</article>
      <h3>{book.name}</h3>
    <p> {book.description}</p>
    <h2>RS {book.price}</h2>

    </div>

                        </li>
                    )
                })}
            </ul>
        </div>
        </>
    )
}

export default UserView
