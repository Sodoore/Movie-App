import react from "react";
import "./style.css"

export const Card = (props) =>{
    // console.log(props.info)
    let img = "https://image.tmdb.org/t/p/w500";
    return(
       <div className="Cards">
            <div className="movie">
                <img src={img + props.info.poster_path } alt="" className="poster" />
                <div className="movie-details">
                    <div className="box">
                        <h4 className="title">{props.info.title}</h4>
                        <p className="raiting">{props.info.vote_average}</p>
                    </div>
                    <div className="overview">
                        <h1>overview</h1>
                        {props.info.overview}
                    </div>
                </div>
            </div>
            <button>zahialah</button>
       </div>
    )
}