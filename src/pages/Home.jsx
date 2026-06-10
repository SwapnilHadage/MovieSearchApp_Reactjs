import { useSelector } from "react-redux";
import {MiniCard, MiniCardSkeleton, MiniCardError} from "../components";

function Home() {

  const { theme, loading, error, fetchedData} = useSelector(state=>state.movieSearch)

  if(loading){
    return <div className={`w-full min-h-auto flex-1 p-3 ${theme ? 'bg-slate-950' : 'bg-slate-50' } grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}>
      {
        Array.from({length:10}).map((_,i)=> <MiniCardSkeleton key={i}/>)
      }
    </div>
  }
  if(error){
    return <div className={`  flex-1 min-h-full p-3 ${theme ? 'bg-slate-950' : 'bg-slate-50' } flex items-center justify-center`}>
      <MiniCardError className={`w-[50%]`}
      error={error}/>
    </div>
  }


  return (
    <div
    className={`w-full min-h-auto p-3 ${theme ? 'bg-slate-950' : 'bg-slate-50' } `}>
      <div className={`grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
        `}>
        {
          fetchedData?.map((element, i) => (
            <MiniCard
              key={i}
              data={element}
            />
          ))
        }
      </div>
    </div>
  )
}
export default Home