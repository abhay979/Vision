import React, { useState } from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import img from './utils/logo.png'
import {  Form} from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const Navbar = () => {
  const [searchTerm,setsearchTerm] = useState('');
  const navigate = useNavigate();
  const handle = (e) =>{
    e.preventDefault();
    if(searchTerm) {
      navigate(`/search/${searchTerm}`);
      setsearchTerm('');
    }
  }
  const handleButtonClick = () => {
    window.location.href = 'https://github.com/abhay979';
  };
  return (
    <Stack direction="row" alignItems="center" p={2}
     sx={{position:"sticky",background:"#1e1e1e",top:0,justifyContent:'space-between'}}>
      <Link to="/" style={{display:'flex',alignItems:'center'}}> 
      <img src={img} alt='logo' style={{height:"40px",width:"90px",borderRadius:"5px 5px 5px 5px"}}></img>
      </Link>
      <div><Button variant="outline-info mx-2" onClick={handleButtonClick}>Created by Abhay Sahu </Button>
      <Button variant="outline-info " > Contact Us</Button></div>
      <Form className="d-flex"> 
                 <Form.Control
                    type="search"
                    placeholder="Search"
                    className="searchbar me-2"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={(event)=>{ 
                      setsearchTerm(event.target.value);
                    }}/>
                     <button className="custom-btn btn-2" onClick={handle}>Search</button>
                </Form>

    </Stack>
  )
}

export default Navbar
