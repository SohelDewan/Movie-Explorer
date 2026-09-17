
export default function MovieModal({ movie, onClose }) {

  return (
    <>
      <div onClick={onClose} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 ">
        <div onClick={(e) => e.stopPropagation()} className=" bg-white text-black max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 relative">
          <button onClick={onClose} className="aabsolute top-3 right-3 text-xl bg-black/60 text-white w-8 h-8 rounded-full flex items-center justify-center">X</button>
          <img src={movie.image?.original} alt={movie.name} className=" w-full max-h-80 object-contain rounded-lg mb-4" />
            <h1 className="text-2xl font-bold capitalize">{movie.name}</h1>
            <p className="py-3">Rating: ⭐{movie.rating?.average ?? "N/A"} 📅 {movie.premiered}</p>
            <p className="pb-2 font-bold">{movie.genres?.join(", ")}</p>
            <p className="pb-2 font-bold">{movie.url}</p>
            <p className="pb-2 font-bold">Language: {movie.language}</p>
            <h2 className="pb-2 font-bold">Summary:</h2>
            <div className="text-justify" dangerouslySetInnerHTML={{ __html: movie.summary }} />
          </div>
        </div>
    </>
  )
}
