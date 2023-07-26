import Row from "./Row"
import Urls from "./Urls"
import "./netflix2.css"
import Front from "./Front"
// import { Home } from "@mui/icons-material"
function Home ()
{
    return(
        <>
        <Front/>
        <Row   link= {Urls.netflixOriginals} heading="Originals"  />
        <Row   link= {Urls.trendingNow} heading="Trending"  />
        <Row   link= {Urls.topRated} heading="Toprated" />
        <Row   link= {Urls.actionMovies}  heading="Action movies"/>
        <Row   link= {Urls.comedyMovies} heading="Comedy movies" />
        <Row   link= {Urls.horrorMovies}   heading="Horror movies"/>
        <Row   link= {Urls.romanticMovies} heading="Romantic movies" />
        <Row   link= {Urls.documentaries} heading="Documantaries" />
                </>    
    )

}
export default Home