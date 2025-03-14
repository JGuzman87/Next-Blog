"use client";
import { useState} from "react";
import  {useRouter}  from "next/navigation";

import "./Form.css";

const Form = () => {


const router = useRouter();
 const [formInfo, setFormInfo ] = useState ({title: '', username: '', comment: ''})
  


  
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    if (name === 'title' ) {
      //set form info to previous
      setFormInfo({...formInfo, title:value});
    } else if (name === "username") {
      setFormInfo({...formInfo, username: value});
    } else if (name === "comment") {
      setFormInfo({...formInfo, comment: value});
    }
  };

  const handleClick = (e: any) => {
   e.preventDefault()
   localStorage.setItem("blogs", JSON.stringify(formInfo));
    console.log(formInfo);
     router.push("/posts");
    setFormInfo({ title: "", username: "", comment: "" });
   
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
        value={formInfo.comment}
        name="comment"
        id="comment"
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
