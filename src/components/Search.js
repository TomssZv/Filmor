import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../style/Components.css';
import {FaSearch} from 'react-icons/fa'

function Search() {
    const [input, setInput] = useState('');
    let navigate = useNavigate();
    
    const handleSubmit = () => {
        navigate('/movies/' + input)
    };

  return (
    <div id='search-c'>
         <Link to='/' id='name'>Filmor</Link>
        <form onSubmit={handleSubmit} className="search">
        <FaSearch />
            <input className="inp" value={input} onChange={(e) => {
                setInput(e.target.value);
            }}>
            </input>
        </form>
    </div>
  )
}

export default Search