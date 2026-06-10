import {Search, } from './index'
import { useSelector, useDispatch } from 'react-redux';
import {RiMenu3Fill, } from '../assets/react-icons/icons';
import { toggleTheme, } from '../redux/slices/movieSearchSlice'
function Header() {

  const { theme, } = useSelector(state=>state.movieSearch);
  const dispatch = useDispatch();

  function handleToggleTheme(){
    dispatch(toggleTheme());
  }

  return (
    <header
    className={`relative p-2 flex-none flex justify-evenly items-center
      ${theme
          ? "border-slate-800 bg-slate-900 text-white"
          : "border-slate-200 bg-slate-100 text-slate-900"}`}>
      <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center gap-4 px-4 py-3 md:justify-evenly ">
        <Search/>

          <button
          type="button"
          aria-label="Change Theme"
          className="shrink-0"
          onClick={handleToggleTheme}>
            {"D<->L"}
          </button>

          <button
          type="button"
          aria-label="Open navigation menu"
          className='shrink-0 ml-auto
          md:hidden
          '>
            <RiMenu3Fill/>
          </button>
          </div>
          
    </header>
  )
}

export default Header
