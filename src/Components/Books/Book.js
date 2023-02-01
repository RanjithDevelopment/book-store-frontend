import { Button } from '@mui/material';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Book.css";

const Book = (props) => {
  const history =useNavigate();
    //to handle delete 
    const handleDelete = async () =>{
await axios.delete(`https://book-store-org.onrender.com/books/delete/${props.book._id}`).then(()=>history('/books'))
    }

   
  return (
    <>
   
    <div className='card'>
      
      <img src={props.book.image} alt={props.book.name}/>
      <article>By {props.book.author}</article>
      <h3>{props.book.name}</h3>
    <p> {props.book.description}</p>
    <h2>RS {props.book.price}</h2>
    <Button sx={{mt:"auto"}} LinkComponent={Link} to={`/books/${props.book._id}`} >Update</Button>
    <Button sx={{mt:"auto"}} onClick={handleDelete}>Delete</Button>
    </div>
    </>
  )
}

export default Book
