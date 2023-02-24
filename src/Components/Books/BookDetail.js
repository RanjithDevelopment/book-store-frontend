 import React, { useEffect,useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FormLabel, TextField,Button,FormControlLabel,Checkbox} from '@mui/material'
import { Box } from '@mui/system'
 import axios from 'axios';
import Header from '../Header';
 const BookDetail = () => {
    const history = useNavigate();
    let formValues = {
   
        name: "",
        author: "",
        description: "",
        price: "",
        image:"",
        error: {
          name: "",
          author: "",
          description: "",
          price: "",
          image:""
        }
      };
      const [formData, setFormData] = useState(formValues);
      const [checked, setChecked] = useState(false);
    const id = useParams().id;
 
    useEffect(()=>{
       const fetchHandler = async()=>{
        const response= await axios.get(`https://book-store-org.onrender.com/books/get/${id}`)
     setFormData(response.data)
       } 
       fetchHandler()
    },[id])
    //handle Submit FUnction
    const handleSubmit = async(e)=>{
e.preventDefault();
const update= await axios.put(`https://book-store-org.onrender.com/books/update/${id}`,{
    name:String(formData.name),
      author:String(formData.author),
      description:String(formData.description),
      price:Number(formData.price),
      available:Boolean(checked),
      image:String(formData.image)
}).then(() => history('/books'))
    }
   //to handle Form Values 
  const handleChange = (e) => {
    let error = { ...formData.error };
    if (e.target.value === "") {
      error[e.target.name] = `${e.target.name} is Required`;
    } else {
      error[e.target.name] = "";
    }
    setFormData({ ...formData, [e.target.name]: e.target.value, error });

  };
   return (
     <div>
        <Header/>
        <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" justifyContent={'center'} maxWidth={700} alinContent={"center"} alignSelf="center"marginLeft={'auto'} marginRight="auto"  >
      <FormLabel>Name</FormLabel>
      <TextField margin='normal'  variant='outlined' name="name"  value={formData.name}
          onChange={(e) => handleChange(e)}/>
       
      <FormLabel>Author</FormLabel>
      <TextField margin='normal'  variant='outlined' name="author"  value={formData.author}
          onChange={(e) => handleChange(e)}/>
      
      <FormLabel>Description</FormLabel>
      <TextField margin='normal'  variant='outlined' name="description"  value={formData.description}
          onChange={(e) => handleChange(e)}/>
         
      <FormLabel>Price</FormLabel>
      <TextField type="number" margin='normal'  variant='outlined' name="price"  value={formData.price}
          onChange={(e) => handleChange(e)}/>
          
          <FormLabel>Image URL</FormLabel>
      <TextField  margin='normal'  variant='outlined' name="image"  value={formData.image}
          onChange={(e) => handleChange(e)}/>
          
          <FormControlLabel
          control={
            <Checkbox  checked={checked} onChange={() => setChecked(!checked)}/>
          }
          label="Available"
        />

      <Button marginTop={20} variant='contained' type='submit' >Add Book</Button>
      </Box>
     </form>
     </div>
   )
 }
 
 export default BookDetail
 