import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { NavLink } from 'react-router-dom';
import jwt_decode from "jwt-decode";
const Header = () => {
    const token = localStorage.getItem("token");
const existuser = jwt_decode(token);

    const [value, setValue] = useState();
    return (
        <div>
            <AppBar sx={{backgroundColor:"#232F3D"}} position='sticky'>
                <Toolbar>
                    <NavLink to='/Header' style={{color:"white"}}>
                    <Typography>
                        <LibraryBooksIcon /> ADMIN DASHBOARD
                    </Typography>
                    </NavLink>
                    <Tabs 
                    sx={{ml:"auto"}}
                    textColor='inherit' 
                    indicatorColor='primary' 
                    value={value} 
                    onChange={(e, val) => setValue(val)}
                    >
                       
                        
                        <Tab LinkComponent={NavLink } to="/add" label='ADD Book' />
                        <Tab LinkComponent={NavLink } to="/books" label='Books' />
                        <Tab LinkComponent={NavLink } to="/about" label='About US' />
                        <li>
                        {
                        token ? <></> :<Tab LinkComponent={NavLink } to="/" label='Login' />
                        }
                        </li>
                        <li>
                        {
                        token ? <></> :<Tab LinkComponent={NavLink } to="/Signup" label='Signup' />
                        }
                        </li>
                    </Tabs>
                    <Typography>
                        {existuser.firstname} {existuser.lastname}
                    </Typography>
                </Toolbar>


            </AppBar>
        </div>
    )
}

export default Header;

















