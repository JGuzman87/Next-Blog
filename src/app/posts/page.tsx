"use client"
import {useEffect, useState} from 'react'




const BlogPost = () => {
  // any object stored in savePost must be a string
interface Blog {
title: string,
username: string,
content: string
}
//savePost uses interface Blog, nor null.  It starts at null
 const [savedPost, setSavedPost] = useState <Blog | null >(null);

 useEffect(() => {
//assigned a constant to the items being retrieved from localStorage
 const storedPosts = localStorage.getItem('blogs');
  
//retrieved post type string / coverts to object.
// retrieved post true, parse it as object, else retrieved post if null
  const retrievedPosts  = storedPosts ? JSON.parse(storedPosts) : [];
  setSavedPost(retrievedPosts)
  console.log(retrievedPosts)


 
 }, [])
  


 





  return (
    <div className="card bg-base-100 image-full w-96 shadow-sm">
      <figure></figure>
      <div className="card-body">
        <h2 className="card-title">{savedPost?.title}</h2>
        <p>{savedPost?.username}</p>
        <p>{savedPost?.content}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  );

    } 




export default BlogPost