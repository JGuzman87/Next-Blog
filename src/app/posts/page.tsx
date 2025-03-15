"use client"
import {useEffect, useState} from 'react'

const BlogPost = () => {
  interface Blog {
    title: string,
    username: string,
    content: string
  }
  
  const [savedPosts, setSavedPosts] = useState<Blog[]>([]);

  useEffect(() => {
    const storedPosts = localStorage.getItem('blogs');
    const retrievedPosts = storedPosts ? JSON.parse(storedPosts) : [];
    
    setSavedPosts(Array.isArray(retrievedPosts) ? retrievedPosts : []);
    console.log(retrievedPosts);
  }, []);
  
  return (
    <div>
      {savedPosts.map((post, index) => (
        <div key={index} className="card shadow-lg gap-10">
          <div className="card-body justify-start">
            <h2 className="card-title">{post.title}</h2>
            <p>{post.username}</p>
            <p>{post.content}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogPost