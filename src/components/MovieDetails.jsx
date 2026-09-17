import { useEffect, useState } from "react";
import { useParams } from "react-router"
import Navbar from "./Navbar"
export default function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie]= useState(null);
    
    useEffect(()=>{
      fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(res=>res.json())
      .then(data=> setMovie(data))
    }, [id]);

    if(!movie) return <p>Loading...</p>

  return (
    <>
    <Navbar />
    
    <div className="px-4 md:px-16 py-3 md:py-12  flex flex-wrap gap-5  bg-[#155dfc] text-white">
      <img src={movie.image?.original} alt={movie.name} className="md:w-1/2 w-full max-w-sm md:max-w-sm rounded-lg object-cover " />
      <div className="md:w-1/2 w-full pt-5 md:p-16 text-justify">
        <h1 className="text-4xl capitalize">{movie.name}</h1>
      <p className="py-3">Rating: ⭐{movie.rating?.average??"N/A"} 📅 {movie.premiered}</p>
      <p className="pb-3 font-bold">{movie.genres?.join(", ")}</p>
      <p className="pb-3 font-bold">{movie.url}</p>
      <p className="pb-3 font-bold">Language: {movie.language}</p>
      <h2 className="pb-3 font-bold">Summary:</h2>
      <div dangerouslySetInnerHTML={{ __html: movie.summary }} />
      </div>
    </div>
    </>
  )
}
