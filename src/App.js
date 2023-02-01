
import React from "react";
import { Route, Routes } from "react-router-dom";
import Hompage from "./Components/Homepage";
import Signup from "./Components/Signup";
import Header from "./Components/Header";
import AddBook from "./Components/AddBook";
import Books from "./Components/Books/Books";
import About from "./Components/About";
import BookDetail from "./Components/Books/BookDetail";
import UserView from "./Components/Userview";
import Login from "./Components/Login";
function App() {
  return (
    <>

    <Routes>
      <Route path="/" element={<Hompage/>}/>
      <Route path='/Login' element={<Login/>}/>
     <Route path="/Signup" element={<Signup/>}/>
     <Route path="/Header" element={<Header/>}/>
     <Route path="/add" element={<AddBook/>} exact/>
     <Route path="/books" element={<Books/>} exact/>
     <Route path="/about" element={<About/>} exact/>
     <Route path="/books/:id" element={<BookDetail/>}/>
     <Route path="/userview" element={<UserView/>}/>
    </Routes>
    
    </>
  );
}

export default App;
