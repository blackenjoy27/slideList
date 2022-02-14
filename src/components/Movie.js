const Movie = ({ info }) => {
    const { imgUrl, title, updateInfo } = info;
    return (
        <div className="movie">
            <a href="#"><img className="movie_cover" src={imgUrl} alt={title} /></a>
            <div>
                <h2>
                    <a href="#">
                        {title}
                    </a>
                </h2>
                <p>
                    <span>
                        {updateInfo}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Movie;