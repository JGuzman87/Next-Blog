"use client"
import {useEffect, useState} from 'react'


const BlogPost = () => {

  const [data, setData] = useState(null)




useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon/ditto"
        );
        const fetchedData = await response.json();
        console.log(fetchedData)
        setData(fetchedData);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    console.log(data);

fetchData();
}, [])



  return (
    <div className="card bg-base-100 image-full w-96 shadow-sm">
      <figure></figure>
      <div className="card-body">
        <h2 className="card-title">Random Quote</h2>
        <ul>
          <li>
          {data
            ? data.name
            : "nothing to show"}</li>
        </ul>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );

    } 




export default BlogPost