import MovieCard from "../components/Moviecard";
import { useState,useEffect } from "react";
import { getPopularMovies,searchMovies } from "../services/api";
import "../css/Home.css"

function Home()
{

    const [searchQuery,setsearchQuery]=useState("");
    const[movies,setMovies]=useState([]);
    const [error,setError]= useState(null)
    const[loading,setLoading]=useState(true)

    useEffect(() => {
        const loadPopularMovies= async()=>{
            try{
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            }
            catch(err){
                setError("Failed to load............")
            }
                finally  {
                    setLoading(false)
                }
        }
        loadPopularMovies()
        console.log(loadPopularMovies)
    },[])

    const handleSearch=(e)=>{
        e.preventDefault()
        alert(searchQuery)
        setsearchQuery("")
    }

return(
<div className="Home">
    <form onSubmit={handleSearch} className="search-form">
        <input type="text" placeholder="Search" className="search-input" value={searchQuery} onChange={(e)=>setsearchQuery(e.target.value)}/>
        <button type="submit" className="search-button">Search</button>
    </form>
    <div className="movie-grid">
        {movies.map(
            (movie)=>
            movie.title.toLowerCase().startsWith(searchQuery) && 
            (<MovieCard movie={movie} key={movie.id} />)
            )}
    </div>
</div>
)
}
export default Home;