import {useState} from 'react';
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
    <div
    className={`w-full h-13 p-2 flex justify-evenly items-center
      ${theme? ' bg-slate-900 ' : ' bg-slate-100 ' }`}>
      <Search/>

      <button
      onClick={handleToggleTheme}>
        {"D<->L"}
      </button>

      <button
      className='absolute top-4 right-4 text-white
      md:hidden
      '>
        <RiMenu3Fill/>
      </button>
      
    </div>
  )
}

export default Header
