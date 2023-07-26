import{useState,useEffect} from "react"
import axios from "axios"
// import Urls from "./Urls";
const path = "https://image.tmdb.org/t/p/original"
const API_KEY = "2e80297decc2bf87170c8aa71e4fb8ed";
const baseURL = "https://api.themoviedb.org/3";
function Front()
{
    let random = Math.floor(Math.random()*20)
    console.log(random)
    const[front,setfront]= useState([])
    const [name,setname]= useState([])
    const[desc,setdesc] = useState([])
    // const[random,setrandom] = useState('')
    useEffect(()=>{
    axios.get(baseURL+`/discover/tv?api_key=${API_KEY}&with_networks=213`)
    .then((Response)=>
    {
       console.log(Response.data.results)
       setfront(Response.data.results[random].backdrop_path)
       setname(Response.data.results[random].name)
       setdesc(Response.data.results[random].overview)
       
    
    })
},[])


    return(
        <div className="front" style={{backgroundImage:"url("+path+front+")"}}>
            <div className="box">
                <h2>{name}</h2>
                <p>{desc}</p>
            </div>

        </div>
    )
}
export default Front