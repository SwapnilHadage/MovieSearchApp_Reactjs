export const getRatingColor= (rating)=>{
  if(rating>7.5){
    return "text-emerald-400"
  }else if(rating>5){
    return "text-yellow-400"
  }else if(rating>2.5){
    return "text-orange-400"
  }else{
    return "text-red-400"
  }
}