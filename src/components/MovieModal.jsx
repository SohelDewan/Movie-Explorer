
export default function MovieModal({ movie, onClose }) {
const logoGradient = "bg-gradient-to-r from-[#0F245B] via-[#32DBE9] to-[#FA7327]";
  return (
    <>
      <div onClick={onClose} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 ">
        <div onClick={(e) => e.stopPropagation()} className=" bg-white text-black max-w-2xl w-full max-h-[85vh] overflow-y-auto p-4 relative">
          <button onClick={onClose} className={`absolute top-3 right-3 text-xl ${logoGradient} text-white w-8 h-8 rounded-full flex items-center justify-center`}>X</button>
          <img src={movie.image?.original} alt={movie.name} className={` w-full max-h-80 object-contain rounded-lg mb-2 shadow-2xl ${logoGradient}`} />
            <h1 className="text-2xl font-bold capitalize">{movie.name}</h1>
            <p className="py-2">Rating: ⭐{movie.rating?.average ?? "N/A"} 📅 {movie.premiered}</p>
            <p className="pb-1 font-bold">{movie.genres?.join(", ")}</p>
            <p className="pb-1 font-bold">{movie.url}</p>
            <p className="pb-1 font-bold">Language: {movie.language}</p>
            <h2 className="pb-1 font-bold">Summary:</h2>
            <div className="text-justify" dangerouslySetInnerHTML={{ __html: movie.summary }} />
          </div>
        </div>
    </>
  )
}
