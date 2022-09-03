import React , {useState, useEffect} from "react";
import { Card } from "../Card";
let API_key = "&api_key=03eaf05c914faab4efbff43997e5c9d4"
let baseUrl = "https://api.themoviedb.org/3"
let url = baseUrl+"/discover/movie?sort_by=popularity.desc"+API_key;
let arr = ["Popular", "Theatre", "Kids", "Drama", "Comedie"]
export const Main = () =>{
    const [movieData, setData] = useState([]);
    const [Url, setUrl] = useState(url);
    const [search, setSearch] = useState()
    useEffect(()=>{
        fetch(Url).then(result => result.json().then(data => {
            // console.log(data.results)
            setData(data.results)
        }))
    },[Url])
    const getData = (movieType) =>{
        if(movieType === "Popular" ){
            url = baseUrl+"/discover/movie?sort_by=popularity.desc"+API_key;
        }else if(movieType === "Theatre"){
            url = baseUrl+"/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22"+API_key;
        }else if(movieType === "Kids"){
            url = baseUrl+"/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc"+API_key;

        }else if(movieType === "Drama"){
            url = baseUrl+"/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10"+API_key;

        }else if(movieType === "Comedie"){
            url = baseUrl+"/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc"+API_key;

        }
        setUrl(url);
    }
    const searchMovie = (ev) =>{
        if(ev.key==="Enter"){
            url = baseUrl + "/search/movie?api_key={03eaf05c914faab4efbff43997e5c9d4}&query=" + search;
            setUrl(url);
            setSearch(" ");
        }
    }
    return(
       <>
        <div className="header">
           <nav>
            <ul>
                {
                    arr.map((el)=>{
                        return(
                            <li><a href="#" name={el} onClick={(el) =>{getData(el.target.name)}}>{el}</a></li>

                        )
                    })
                }
            </ul>
            </nav> 
            <form>
                <div className="search-btn">
                    <input 
                    type="text" 
                    className="inputText" 
                    placeholder="Search Movie Name" 
                    onChange={(e)=>{setSearch(e.target.value)}} 
                    value = {search}
                    onKeyPress = {searchMovie}
                    />
                    <button><i class="fa-light fa-magnifying-glass"></i></button>
                </div>
            </form>
        </div>
        <div className="container">
            {( movieData.length === 0 )?<p className="notFound">Not Found</p>: movieData.map((res,pos)=>{
                return(<Card info={res} key={pos}/>)
            })}
        </div>
       </>
    )
}