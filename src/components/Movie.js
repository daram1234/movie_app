import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

const summary_copy = {}

function ShowSummary(who){
    const id = who.target.id;
   document.getElementById(id).innerText = summary_copy[id];
}

function Movie({ id, year, title, summary, poster, genres }) {
    summary_copy[id]=summary;

    return <div className="movie">
        <img src={poster} alt={title} title={title}></img>
        <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">
                {genres.map((genre, index) =>
                    (<li key={index} className="genres__genre">{genre}</li>)
                )} 
            </ul>
            <p className="movie__summary" id={id} onClick={ShowSummary}> 
            { summary.length > 180 ? 
            (summary.slice(0,180) + "...") :
            (summary)}
            </p>

        </div>
    </div>;
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;