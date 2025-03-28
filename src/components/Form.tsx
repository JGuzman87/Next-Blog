 "use client";
import React from "react";
import { useState } from "react";
import  {useRouter}  from "next/navigation";

import "./Form.css";

const Form = () => {

const router = useRouter();
 const [formInfo, setFormInfo ] = useState ({title: '', username: '', content: ''});
 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormInfo(prevInfo => ({...prevInfo, [name]: value}));


  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    //This grabs all the values from the client object and puts them into an array.
    //	.every() is an array method that checks every item in an array and returns true only if all items pass the test.
    const formCompleted = Object.values(formInfo).every(
      (value) => value.trim() !== ""
    );

    if (!formCompleted) {
     return alert("Please fill all fields");
    }
    // Retrieve existing blogs from localStorage
    const existingBlogs = JSON.parse(localStorage.getItem("blogs") || "[]");

    // Ensure it's an array before pushing new data
    const updatedBlogs = Array.isArray(existingBlogs)
      ? [...existingBlogs, formInfo]
      : [formInfo];

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
