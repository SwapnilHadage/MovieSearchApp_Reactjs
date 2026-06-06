import { useSelector } from "react-redux";
import { searchMovieByName } from "../services/searchMovieByName";

function Home() {

  const { theme, } = useSelector(state=>state.movieSearch)

  return (
    <div 
    className={` size-full min-h-screen ${theme ? 'bg-slate-950' : 'bg-slate-50' } `}>
      <button onClick={
        searchMovieByName
      }
      className="text-white">
        click
      </button>
    </div>
  )
}


export default Home