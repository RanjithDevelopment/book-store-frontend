import React, { useState } from 'react';
import { FormLabel, TextField,Button,FormControlLabel,Checkbox} from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header';


const AddBook = () => {
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
  //to Haanlde the submission of the Form
  const handleSubmit = async (e)=>{
  
    e.preventDefault();
    const addBook = await axios.post("https://book-store-org.onrender.com/books/post",{
      name:String(formData.name),
      author:String(formData.author),
      description:String(formData.description),
      price:Number(formData.price),
      available:Boolean(checked),
      image:String(formData.image)
    }).then(() => history('/books') )
    setFormData(formValues);
  }

  return (
    <div>
      <Header/>
     <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" justifyContent={'center'} maxWidth={700} alinContent={"center"} alignSelf="center"marginLeft={'auto'} marginRight="auto"  >
      <FormLabel>Name</FormLabel>
      <TextField margin='normal'  variant='outlined' name="name"  value={formData.name}
          onChange={(e) => handleChange(e)}/>
          <span style={{ color: "red" }}>{formData.error.name}</span>
      <FormLabel>Author</FormLabel>
      <TextField margin='normal'  variant='outlined' name="author"  value={formData.author}
          onChange={(e) => handleChange(e)}/>
          <span style={{ color: "red" }}>{formData.error.author}</span>
      <FormLabel>Description</FormLabel>
      <TextField margin='normal'  variant='outlined' name="description"  value={formData.description}
          onChange={(e) => handleChange(e)}/>
          <span style={{ color: "red" }}>{formData.error.description}</span>
      <FormLabel>Price</FormLabel>
      <TextField type="number" margin='normal'  variant='outlined' name="price"  value={formData.price}
          onChange={(e) => handleChange(e)}/>
          <span style={{ color: "red" }}>{formData.error.price}</span>
          <FormLabel>Image URL</FormLabel>
      <TextField  margin='normal'  variant='outlined' name="image"  value={formData.image}
          onChange={(e) => handleChange(e)}/>
          <span style={{ color: "red" }}>{formData.error.image}</span>
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

export default AddBook
{/* <FormControl fullWidth marginBottom="20px">
          <InputLabel id="Courses">Availability</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Courses"
            name="courses"
            value={formData.available}
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value="React">True</MenuItem>
            <MenuItem value="Node">False</MenuItem>
            
          </Select>
        </FormControl > */}
        // checked={checked} onChange={() => setChecked(!checked)}