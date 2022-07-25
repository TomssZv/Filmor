import '../style/Components.css';
import { Link } from 'react-router-dom';

function MovieCard(props) {
  return (
    <Link to={'/movie/' + props.id} className="card" key={props.id}>
        <h1 className="title">{props.title}</h1>
        <img className="images" src={props.poster} alt={props.title}></img>
    </Link>
  )
}

export default MovieCard