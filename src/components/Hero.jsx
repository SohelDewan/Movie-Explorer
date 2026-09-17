import { Link } from "react-router"

export default function Hero() {
    // const navigate = useNavigate()
    const logoGradient = "bg-gradient-to-r from-[#0F245B] via-[#32DBE9] to-[#FA7327]";
       const hoverGradient = "bg-gradient-to-r from-[#0F245B] via-[#32DBE9] to-[#FA7327] hover:bg-gradient-to-l transition-all duration-500";

    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage:
                    "url(https://i.ibb.co.com/N20WZNm1/hero-movie.png)",
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">DISCOVER MOVIES</h1>
                    <p className="mb-5 text-2xl">
                       Explore and discover your favorite movies from around the world.
                    </p>
                    <Link to="/movielist" className={`btn ${logoGradient} ${hoverGradient} text-white`}>Explore Movies</Link>
                </div>
            </div>
        </div>
    )
}
