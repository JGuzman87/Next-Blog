"use client";
import { useState} from "react";
import  {useRouter}  from "next/navigation";

import "./Form.css";

const Form = () => {

const router = useRouter();
 const [formInfo, setFormInfo ] = useState ({title: '', username: '', content: ''})

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    if (name === 'title' ) {
      setFormInfo({...formInfo, title:value});
    } else if (name === "username") {
      setFormInfo({...formInfo, username: value});
    } else if (name === "content") {
      setFormInfo({...formInfo, content: value});
    }
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    
    // Retrieve existing blogs from localStorage
    const existingBlogs = JSON.parse(localStorage.getItem("blogs") || "[]");
    
    // Ensure it's an array before pushing new data
    const updatedBlogs = Array.isArray(existingBlogs) ? [...existingBlogs, formInfo] : [formInfo];

    // Store updated blogs array
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));

    console.log(updatedBlogs);
    router.push("/posts");
    
    setFormInfo({ title: "", username: "", content: "" });
  };

  return (
    <form className="form-container shadow-lg">
      <label htmlFor="title">Title</label>
      <input
        value={formInfo.title}
        name="title"
        id="title"
        onChange={handleChange}
        placeholder="Type tite..."
      />
      <label htmlFor="username">Username</label>
      <input
        value={formInfo.username}
        name="username"
        onChange={handleChange}
        id="username"
        placeholder="Type username..."
      />
      <label htmlFor="content">Content</label>
      <textarea
        value={formInfo.content}
        name="content"
        id="content"
        onChange={handleChange}
        placeholder="Type content..."
      ></textarea>
      <button className="btn btn-neutral btn-wide" onClick={handleClick}>
        Submit
      </button>
    </form>
  );
};

export default Form;
