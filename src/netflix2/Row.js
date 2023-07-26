import{useEffect, useState} from 'react' 
import axios from 'axios'
const baseURL = "https://api.themoviedb.org/3";


function Row(props)

{ 

    const path = "https://image.tmdb.org/t/p/original"
const [movierow , setmovierow] = useState([])

useEffect(()=> {
axios.get(baseURL+props.link)
 .then((Response)=>{
    // console.log(Response.data.results)
    setmovierow(Response.data.results)
  
 })
}, [movierow])

    return(
        <section className='section'>
            <h1>{props.heading}</h1>
            <div className='movies'>
            {
                   movierow ?
                   movierow.map((movie) =>
                   
                       
                       <div className='movie-box' >
                    
                           <img src={path+movie.backdrop_path} alt='rowImg'></img>
                        
                       </div>
                   ): ''}
            </div>
        </section>
    )
}
export default Row