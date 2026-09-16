

export default function MovieCard({movie, onSeeDetails}) {

    const posterUrl = movie.image?.medium || '/placeholder-poster.png';
    const year = movie.premiered? movie.premiered : "N/A";
    const rating = movie.rating? movie.rating?.average : "N/A";
   

  return (
    <>
    <div className="card border rounded-lg overflow-hidden shadow">
        <img src={posterUrl} alt={movie.name} className="w-full h-64 object-cover" />
        <div className="p-3">
            <h3 className="font-semibold">{movie.name}</h3>
            <p className="text-sm text-gray-600"><span className="justify-between flex text-2xl">Rating: ⭐ {rating} </span>Year of premiered: {year}</p>
            <button 
            onClick={onSeeDetails}
            className="btn bg-[#155dfc] text-white w-full"
            >See Details</button>
        </div>
    </div>
    </>
  )
}
