import React, { useState } from "react";
import './styles/searchAppBar.scss'
export default function SearchAppBar({keywords}) {
const [post, setPost]= useState();
  const handleChange = (event) =>{
    keywords(event);
    setPost(event.target.value);
  }
  return (
    <input type="text" id="fname" name="fname" onChange={handleChange} value={post} placeholder="&#xF002;" className="search"/>
  );
}
