import { useDispatch, useSelector, } from "react-redux";
import { FaCalendar, TbRating18Plus, TiStarFullOutline, FaHeart, FaRegHeart  } from "../assets/react-icons/icons";
import {getGenreNames} from "../assets/constants/genres";
import { getRatingColor } from "../assets/constants/ratingColors";
import unavailableImage from "../assets/images/unavailable-image.jpg";
import { changeFavs } from "../redux/slices/movieSearchSlice";
import { useEffect, useState } from "react";

function MiniCard({ data, }) {
  
  const dispatch = useDispatch();

  const {
  adult =  false,
  poster_path,
  genre_ids = [],
  id,
  original_language,
  original_title = 'Untitled movie',
  overview,
  release_date,
  vote_average = 0,
  } = data;

  const parsedYear = new Date(release_date).getFullYear();
  const year = Number.isNaN(parsedYear) ? "Unknown" : parsedYear;
  const genres = getGenreNames(genre_ids);
  const ratingColor = getRatingColor(Number(vote_average));
  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : unavailableImage;
  const { theme, favourites} = useSelector(state=>state.movieSearch)
  const isFav = Boolean(favourites[id]);
  const [isHovered, setIsHovered] = useState(false);

  function addToFav(movieID){
    if(!movieID){
      console.log("unable to mark as Favourite");
      return;
    }
    if(favourites?.[movieID]){
      console.log("Already added to fav");
      return;
      
    }

    dispatch(changeFavs({...favourites,  [movieID]: movieID,}));
    console.log("added to favs");
    
    return;
  }
  function removeFromFav(movieID){
    if(!movieID){
      console.log("unable to remove from Favourite");
      return;
    }

    const tempfavs = { ...favourites, };
    delete tempfavs[movieID];
    dispatch(changeFavs(tempfavs));
    console.log("removed from favs");
    return;
  }


  return (
    <div
    onMouseEnter={()=>setIsHovered(true)}
    onMouseLeave={()=>setIsHovered(false)}
    className={` p-2 border-1 border-slate-700 rounded-2xl overflow-hidden   transition-all duration-300  relative flex flex-col gap-2
      ${theme? ' bg-slate-800 border-slate-700 text-slate-50 hover:bg-slate-700 ' : ' bg-white border-slate-200 text-slate-900 hover:bg-slate-100 '}
      `}>
      {/* Adult Badge */}
      {adult &&
        <div className={` absolute top-3 left-3 z-10 `}>
          <TbRating18Plus size={30}/>
        </div>
      }
      {/* Rating Badge */}
      {
        <div className={` absolute top-3 right-3 h-7 w-15 flex rounded-2xl justify-center items-center p-1 z-10 ${theme? ' bg-black/50 ': ' bg-black/50 '}`}>
          <TiStarFullOutline size={25} className="text-yellow-400"/>
          <p className={`${ratingColor}`}>{vote_average}</p>
        </div>
      }
      {/* Poster */}
      <div className={` rounded-2xl overflow-hidden w-full aspect-[2/3] `}>
        <img src={imageUrl} alt={original_title}
          className={`w-full h-full  object-cover transition-all duration-300
            ${isHovered?' scale-[1.05] ':'  '}`}
        />

        {/* Fav icon */}
        { isFav ?
          <FaHeart className={`size-5
          absolute bottom-2 right-2 text-red-500 hover:scale-[1.1]  hover:text-red-600`}
          onClick={()=>{
            removeFromFav(id)
          }}/> :
          <FaRegHeart className={`size-5 absolute bottom-2 right-2 ${theme? ' text-slate-400 ':' text-slate-800 '} hover:scale-[1.1] hover:text-slate-300 `}
          onClick={()=>{
            addToFav(id)
          }}
          />
        }

      </div>
      {/* Details */}
      <div className={`w-full h-auto  rounded-2xl`}>
        <div className={`flex gap-1 justify-start items-center text-sm ${theme? ' text-slate-400 ':' text-slate-600 '}`}>
          <FaCalendar/>
          <p className="">
            {year}
          </p>
        </div>
        <p className={`text-xl font-semibold ${theme? ' text-slate-50 ':' text-slate-900 '} 
        ${isHovered? ' text-yellow-400 ':'  '}`}>{original_title}
        </p>
      </div>
      {/* Genres */}
      <div className={`w-full h-8 flex gap-2  `}>
      {
        genres.map((genre)=>
        <div className={` border border-slate-400 rounded-2xl px-1 py-0 text-sm flex items-center ${theme? ' text-slate-400 hover:text-slate-100 hover:bg-slate-600 ':' text-slate-600 '}`}
        key={genre}>
          <p className="text-xs">
            {genre}
          </p>
        </div>
        )
      }
      </div>
      {/* MainCard btn */}
      <div className={`w-full h-auto ${theme? ' text-slate-100  ':' text-slate-100 '}`}>
        <button 
        type="button"
        aria-label="Click to View More Details about this movie"
        className={`rounded-2xl bg-black py-1 px-3 text-xs`}>
          More Details
        </button>
      </div>
    </div>
  )
}
export default MiniCard