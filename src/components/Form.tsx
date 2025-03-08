import React from 'react'
import './Form.css';

const Form = () => {

  
  return (
    <form className='form-container'>
      <label htmlFor="title">Title</label>
      <input type="title" id="title" placeholder='Type tite...'/>
      <label htmlFor="username">Username</label>
      <input type="username" id="username" placeholder='Type username...' />
      <label htmlFor="content">Content</label>
      <textarea id="content" placeholder='Type content...'></textarea>
    </form>
  );
}

export default Form