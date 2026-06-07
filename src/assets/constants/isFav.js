export const isFavMovie = (movie_id)=>{
  const favs = localStorage.getItem('favourites');
  if(!favs) return false;
  favs.array.forEach(movieID => {
    if (Number(movieID) === Number(movie_id)) {
      return true;
    }
  });
  return false;
}