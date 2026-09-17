import {  useNavigate } from "react-router";

export default function MovieCard({movie}) {

    const posterUrl = movie.image?.medium || '/placeholder-poster.png';
    const year = movie.premiered? movie.premiered : "N/A";
    const rating = movie.rating? movie.rating?.average : "N/A";
    const navigate = useNavigate()
   const onSeeDetails = ()=> navigate(`/movielist/${movie.id}`)

  return (
    <>
    <div className="card border rounded-lg overflow-hidden shadow">
        <img src={posterUrl} alt={movie.name} className="w-full h-64 object-cover" />
        <div className="p-3">
            <h3 className="font-semibold text-2xl">{movie.name}</h3>
            <p className="text-sm text-gray-600"><span className="justify-between flex text-xl">Rating: ⭐ {rating} </span>Year of premiered: {year}</p>
            <button 
            onClick={onSeeDetails}
            className="btn bg-[#155dfc] text-white w-full"
            >See Details</button>
        </div>
    </div>
    </>
  )
}
