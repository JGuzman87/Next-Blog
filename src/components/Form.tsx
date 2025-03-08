"use client";
import { useState } from "react";
import "./Form.css";

const Form = () => {
  const [title, setTitle] = useState("");
  const [username, setUserName] = useState("");
  const [content, setContent] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    if (name === "title") {
      setTitle(value);
    } else if (name === "username") {
      setUserName(value);
    } else if (name === "content") {
      setContent(value);
    }
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    console.log("clicked");
  };

  return (
    <form className="form-container">
      <label htmlFor="title">Title</label>
      <input
        value={title}
        name="title"
        id="title"
        onChange={handleChange}
        placeholder="Type tite..."
      />
      <label htmlFor="username">Username</label>
      <input
        value={username}
        name="username"
        onChange={handleChange}
        id="username"
        placeholder="Type username..."
      />
      <label htmlFor="content">Content</label>
      <textarea
        value={content}
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
