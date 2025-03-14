"use client";
import { useState} from "react";
import  {useRouter}  from "next/navigation";

import "./Form.css";

const Form = () => {

const router = useRouter();


  const handleClick = (e: any) => {
   e.preventDefault()
   localStorage.setItem("blogs", JSON.stringify(formInfo));
    console.log(formInfo);
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
