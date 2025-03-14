"use client"
import {useEffect, useState} from 'react'


const BlogPost = () => {

  const [data, setData] = useState(null)




useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch("https://catfact.ninja/fact");
        const fetchedData = await response.json();
        console.log(fetchedData)
        setData(fetchedData);
        console.log(data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }

    
    };

    

fetchData();
}, [])

  const handleClick = () => {
    return console.log(data);
  };



  return (
    <div className="card bg-base-100 image-full w-96 shadow-sm">
      <figure></figure>
      <div className="card-body">
        <h2 className="card-title">Random Quote</h2>
        <p>{data ? data.fact : "nothing to display"}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleClick}>Submit</button>
        </div>
      </div>
    </div>
  );

    } 




export default BlogPost