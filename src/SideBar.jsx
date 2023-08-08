import React from 'react'
import { Stack} from '@mui/material'
import {categories} from './utils/constants'
const SideBar = (props) => {
    const selectedCategory = props.selectedCategory;
  return (
    <Stack direction='row' sx={{overflowY:"auto",
    height:{sx:'auto',md:'95%'},flexDirection:{md:'column'}}}>

      {
        categories.map((category) => (
          <button className='category-btn text-left my-1' onClick={()=> {props.setselectedCategory(category.name)}}
          style ={{background:selectedCategory === category.name && "#FC1503"}}>
           <span style={{color:selectedCategory === category.name?"white" : "#FC1503",display:"inline-block",float:"left"}}>{category.icon}</span>  
             <span style={{color:"white",marginLeft:"8px",display:"inline-block"}}> {category.name} </span>
          </button>
          
        ))
      }
    </Stack>
  )
}

export default SideBar
