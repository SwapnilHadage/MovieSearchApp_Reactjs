import {useState} from 'react'
import { FiSearch, ImCancelCircle } from '../assets/react-icons/icons';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMoviesByName } from '../redux/slices/movieSearchSlice';

function Search() {
  const dispatch = useDispatch();
  const [movie, setMovie] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const { theme, } = useSelector(state=>state.movieSearch)
  function searchMovies(){
    dispatch(fetchMoviesByName(movie));
    console.log('searched');
    
  }

  return (
    <div className={` h-full min-w-max  overflow-hidden w-[70%] flex flex-wrap text-sm  ${isTyping ? ' border-1 ' : ' '}   ${theme?' text-slate-100 bg-slate-800 ':'  text-slate-900 bg-white '}
    
    
    `}>
      <input type='text' placeholder='Search Movie Here' value={movie}
      className={`flex-1  outline-none flex justify-center px-2 items-center
      ${theme?' text-slate-100 bg-slate-800 placeholder:text-slate-500 focus:bg-slate-600  ':'  text-slate-900 bg-white placeholder:text-slate-400 focus:bg-slate-300'}
      `}
      onChange={(e)=>{
        setMovie(e.target.value.trim());
        setIsTyping(false);
      }}
      onKeyDown={(e)=>{
        setIsTyping(true);
        if(e.key === 'Enter') searchMovies(movie.trim())
      }}/>

      {/* Search btn*/}
      <button title='search button'
      className={`py-2 px-3 
      ${
      theme
        ? 'hover:bg-slate-700 bg-slate-800'
        : 'hover:bg-slate-200 bg-white'
      }
      
      ${movie.length===0 ? 'hidden':'' }`}
      
      onClick={()=>{
        searchMovies(movie.trim())
      }}>
        <FiSearch/>
      </button>
      
      <button
      className={`py-2 px-3 
      ${
      theme
        ? 'hover:bg-slate-600 bg-slate-800'
        : 'hover:bg-slate-200 bg-white'
      }
      ${movie.length===0 ? 'hidden':'' }`}
      onClick={()=>{
        setMovie('')
      }}>
        <ImCancelCircle/>
      </button>
      
    </div>
  )
}

export default Search