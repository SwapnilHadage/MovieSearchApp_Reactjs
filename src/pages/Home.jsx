import { useSelector } from "react-redux"
function Home() {

  const { theme, } = useSelector(state=>state.movieSearch)

  return (
    <div 
    className={` size-full min-h-screen ${theme ? 'bg-slate-950' : 'bg-slate-50' } `}>Home</div>
  )
}

export default Home