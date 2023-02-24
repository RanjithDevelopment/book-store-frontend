import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Book from "../Books/Book";
import "./Book.css";
import Header from '../Header';



const Books = () => {
    async function getData() {
            
        const response = await axios.get("https://book-store-org.onrender.com/books/get");
        setBooks(response.data);
        
    }
    const [books, setBooks] = useState([]);

    useEffect(() => {
      
        getData();

    },[]);

    return (
        <div>
            <Header/>
<ul>
    
 {books.map((book,i)=>{
      return(
       <li className='book' key={i}>
         <Book book={book}/>
       </li>
      )
    })}
</ul>
        </div>
    )
}

export default Books
