import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MovieCard from "../components/MovieCard";

function Movie() {
    let params = useParams();
    const [data, setData] = useState([]);

    const getData = async () => {
        const movie = await fetch(`http://www.omdbapi.com/?i=${params.id}&apikey=${process.env.REACT_APP_MOVIE_API}`)
        const res = await movie.json()
        setData(res.arr);
        console.log(res)
        console.log(data.Object)
    }

    useEffect(() => {
        getData();
        console.log(data);
    }, [])

    useEffect(() => {
        console.log('www ' + data)
    }, [data])

  return (
    <div>

    </div>
  )
}

export default Movie