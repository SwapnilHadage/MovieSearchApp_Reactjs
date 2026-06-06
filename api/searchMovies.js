import tmdb from "./lib/tmdb";

export default async function handler(req, res){
  if(req.method !== "GET"){
    return res.status(405).json({
      success:false,
      message: "Method not allowed",
    });
  }

  const {query, } = req.query;
  if(!query){
    return res.status(400).json({
      success:false,
      message:"Empty Search Parameter",
    })
  }
  try{

    const response = await tmdb.get(
      "/search/movie",{
        params:{
          query,
        }
      });

      return res.status(200).json(response.data);
  }catch(error){
    console.log(error);
    
    return res.status(500).json({
      success: false,
    })
  }
}

