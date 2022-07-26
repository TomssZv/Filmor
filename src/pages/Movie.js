import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import '../style/Pages.css';

function Movie() {
    let params = useParams();
    const [data, setData] = useState([]);

    const getData = async () => {
        const movie = await fetch(`http://www.omdbapi.com/?i=${params.id}&apikey=${process.env.REACT_APP_MOVIE_API}`)
        const res = await movie.json()
        setData(res);
    }

    useEffect(() => {
        getData();
        console.log(data);
    }, [])

    useEffect(() => {
        console.log('www ' + data)
        console.log(data)
    }, [data])

  return (
    <div>
        <div id='ever'>
          <h3>{data.Title}</h3>
          <div id='side'>
            <img id='poster' src={data.Poster} alt={data.Title}></img>
            <div id='info'>
              <p>{data.Plot}</p>
              <h3>{data.Writer}</h3>
              <h4>Metascore: {data.Metascore}</h4>
              <h4>imdb: {data.imdbRating}</h4>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Movie