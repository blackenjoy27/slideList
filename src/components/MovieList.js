import { useState, useEffect } from "react";
import mockData from "../api/data";
import Movie from "./Movie";
const MovieList = (props) => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        setMovies(mockData);
    }, [])
    return (
        <section>
            {movies.map(({ id, ...rest }) => {
                return <Movie key={id} info={rest} />
            })}
        </section>
    )
}

export default MovieList;