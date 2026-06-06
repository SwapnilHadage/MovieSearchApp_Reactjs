import axios from 'axios';

const searchMovieByName = async(movieName)=>{
  const res = await axios.get('api/searchMovies',{ params: {
        query:movieName,
      }});
  console.log(res.data);
  
  return res.data;
}

export { searchMovieByName,

  };