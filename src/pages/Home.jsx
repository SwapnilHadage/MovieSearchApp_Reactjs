import { useSelector } from "react-redux";
import { searchMovieByName } from "../services/searchMovieByName";
import MiniCard from "../components/MiniCard";
import { useEffect,useState } from "react";

function Home() {

  const { theme, fetchedData} = useSelector(state=>state.movieSearch)
  const [yes, setYes] = useState(false);
  // const data = {
  //   adult: false,
  //   backdrop_path: "/rvtdN5XkWAfGX6xDuPL6yYS2seK.jpg",
  //   genre_ids: [80, 9648, 53,],
  //   id: 414906,
  //   original_language: "en",
  //   original_title: "The Batman",
  //   overview: "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
  //   poster_path: "/74xTEgt7R36Fpooo50r9T25onhq.jpg",
  //   release_date: "2022-03-01",
  //   vote_average: 7.7,
  //   }
  useEffect(()=>{
    if (fetchedData) {
      setYes(true);
    }else{
      setYes(false);
    }
  },[fetchedData])

  if(!yes){
    return <div>No data found</div>
  }


  return (
    <div
    className={` size-full min-h-screen ${theme ? 'bg-slate-950' : 'bg-slate-50' } `}>
      <button onClick={
        searchMovieByName
      }
      className="text-white">
        click
      </button>
      <div className={`flex flex-col gap-2 justify-center items-center

        `}>
        {
          fetchedData?.results?.map((element) => (
            <MiniCard
              key={element.id}
              data={element}
            />
          ))
        }
      </div>
    </div>
  )
}


export default Home