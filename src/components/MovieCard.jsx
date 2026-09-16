// import { useNavigate } from "react-router-dom";

export default function MovieCard({movie, onSeeDetails}) {

    const posterUrl = movie.image?.medium || '/placeholder-poster.png';
    const year = movie.premiered? movie.premiered : "N/A";
    const rating = movie.rating? movie.rating?.average : "N/A";
    // const navigate = useNavigate()

  return (
    <>
    <div className="card border rounded-lg overflow-hidden shadow">
        <img src={posterUrl} alt={movie.name} className="w-full h-64 object-cover" />
        <div className="p-3">
            <h3 className="font-semibold">{movie.name}</h3>
            <p className="text-sm text-gray-600">{rating} {year}</p>
            <button 
            // onClick={()=> navigate(`/movies/${movie}`)}
            onClick={onSeeDetails}
            className="btn bg-[#155dfc] text-white w-full"
            >See Details</button>
        </div>
    </div>
    </>
  )
}
