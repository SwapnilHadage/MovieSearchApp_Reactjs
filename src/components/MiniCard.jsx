import { useSelector, } from "react-redux";
import { FaCalendar, TbRating18Plus, TiStarFullOutline, FaHeart, FaRegHeart  } from "../assets/react-icons/icons";
import {getGenreNames} from "../assets/constants/genres";
import { getRatingColor } from "../assets/constants/ratingColors";
import { isFavMovie } from "../assets/constants/isFav";




function MiniCard({ data, }) {
  const {
  adult,
  backdrop_path,
  genre_ids,
  id,
  original_language,
  original_title,
  overview,
  release_date,
  vote_average,

  } = data;
  const year = new Date(release_date).getFullYear();
  const genres = getGenreNames(genre_ids);
  const ratingColor = getRatingColor(Number(vote_average));
  const isFav = isFavMovie(id);
  
  const { theme, } = useSelector(state=>state.movieSearch)


  return (
    <div className={`h-full w-[95%] p-2 border-1 border-slate-700 rounded-2xl overflow-hidden hover:scale-[1.03] hover:translate-y-1  transition-all duration-300  relative flex flex-col gap-2
      ${theme? ' bg-slate-800 border-slate-700 text-slate-50 hover:bg-slate-700 ' : ' bg-white border-slate-200 text-slate-900 hover:bg-slate-100 '}
      `}>
      {/* Adult Badge */}
      {
        <div className={` absolute top-3 left-3 z-10 `}>
          <TbRating18Plus size={30}/>
        </div>
      }
      {/* Rating Badge */}
      {
        <div className={` absolute top-3 right-3 h-7 w-15 flex rounded-2xl justify-center items-center bg-black/50 p-1 z-10 `}>
          <TiStarFullOutline size={25} className="text-yellow-400"/>
          <p className={`${ratingColor}`}>{vote_average}</p>
        </div>
      }

      {/* Poster */}
      <div className={`overflow-hidden w-full h-80 relative`}>
        <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={original_title}
          className={`w-full h-full rounded-2xl object-cover`}
        />

        {/* Fav icon */}
        { isFav ?
          <div className={`absolute bottom-1 right-1`}>
            <FaHeart/>
          </div> :
          <div className={`absolute bottom-1 right-1`}>
            <FaRegHeart/>
          </div>
        }

      </div>
      {/* Details */}
      <div className={`w-full h-35 rounded-2xl`}>
        <p className={`flex gap-1 justify-start items-center ${theme? ' text-slate-400 ':' text-slate-600 '}`}><FaCalendar/>{year}</p>
        <p className={` ${theme? ' text-slate-50 ':' text-slate-900 '} `}>{original_title}</p>
        <p className={`pl-2 ${theme? ' text-slate-400 ':' text-slate-600 '} `}>{overview}</p>
      </div>

      {/* Genres */}
      <div className={`w-full h-8 flex gap-1  `}>
      {
        genres.map((genre)=>
        <div className={` border border-slate-400 rounded-2xl px-2 py-0.5 ${theme? ' text-slate-400  ':' text-slate-600 '}`}
        key={genre}>{genre}</div>
        )
      }
      </div>

      {/* MainCard btn */}
      <div className={`w-full h-8 ${theme? ' text-slate-400  ':' text-slate-600 '}`}>
        <button className={`rounded-2xl bg-black px-2`}>
          More Details
        </button>
      </div>
    </div>
  )
}

export default MiniCard