import { useState, useEffect } from "react";
import mockData from "../api/data";
import Movie from "./Movie";
const MovieList = (props) => {
    const [movies, setMovies] = useState([]);
    const [displayMovies, setDisplayMovies] = useState([]);
    const [indexs, setIndexs] = useState({ head: 0, tail: 3 });
    const [moves, setMoves] = useState([]);


    useEffect(() => {
        setMovies(mockData);
    }, []);

    useEffect(() => {
        if (movies.length !== 0) {
            setDisplayMovies(movies.slice(indexs.head, indexs.tail + 1))
        }
    }, [movies])

    useEffect(() => {
        if (moves.length !== 0) {
            const current = moves[0];
            if (current === "previous") {
                const [f, s, t] = displayMovies;
                setDisplayMovies([movies[indexs.head], f, s, t])

            } else if (current === "next") {
                const [f, ...rest] = displayMovies;
                setDisplayMovies([...rest, movies[indexs.tail]])
            }
            setMoves([]);
        }
    }, [moves])

    useEffect(() => {
        console.log(indexs);
    }, [indexs]);

    const handleNextClick = () => {
        if (indexs.tail === movies.length - 1) {
            setIndexs({ head: indexs.head + 1, tail: 0 });
        } else {
            if (indexs.head === movies.length - 1) {
                setIndexs({ head: 0, tail: indexs.tail + 1 })
            } else {
                setIndexs({ head: indexs.head + 1, tail: indexs.tail + 1 })
            }
        }
        setMoves([...moves, "next"])
    }

    const handlePreviousClick = () => {
        if (indexs.head === 0) {
            setIndexs({ head: movies.length - 1, tail: indexs.tail - 1 });
        } else {
            if (indexs.tail === 0) {
                setIndexs({ head: indexs.head - 1, tail: movies.length - 1 })
            } else {
                setIndexs({ head: indexs.head - 1, tail: indexs.tail - 1 })
            }

        }
        setMoves([...moves, "previous"])
    }

    return (
        <section className="what_on_container">
            <h2 className="what_on_title">WHAT'S ON</h2>
            <div className="movie_list">
                <button className="previous" onClick={handlePreviousClick}>❰</button>
                {displayMovies.map(({ id, ...rest }) => {
                    return <Movie key={id} info={rest} />
                })}
                <button className="next" onClick={handleNextClick}>❱</button>
            </div>
        </section>
    )
}

export default MovieList;