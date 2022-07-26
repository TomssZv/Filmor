import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import MovieCard from '../components/MovieCard';
import '../style/Pages.css';


function Movies() {
    const [data, setData] = useState([]);
    let params = useParams();

    const getData = async () => {
        const movie = await fetch(`http://www.omdbapi.com/?s=${params.name}&apikey=${process.env.REACT_APP_MOVIE_API}`)
        const res = await movie.json();
        setData(res.Search);
    }

    useEffect(() => {
        getData();
    }, [params.name])

  return (
    <div id='mov-card'>
        {data.map((mov) => {
            return <MovieCard
                title={mov.Title}
                poster={mov.Poster}
                id={mov.imdbID}
            />
        })}
    </div>
  )
}

export default Movies