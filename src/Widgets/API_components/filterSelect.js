import React, { useState } from "react";
import './styles/filterSelect.scss';
export default function FilterSelect({keywords,filter}) {
const [post, setPost]= useState();
  const handleChange = (event) =>{
    keywords(event);
    setPost(event.target.value);
  }
  return (
    <div className='bloc-filter-select'>
        <div className='filter-select'>{filter}</div>
        <ul className='filter-options'>
            <li><a href={filter}>{}</a></li>
        </ul>
    </div>
  );
}
