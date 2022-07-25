import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../style/Components.css';

function Search() {
    const [input, setInput] = useState('');
    let navigate = useNavigate();
    
    const handleSubmit = () => {
        navigate('/movies/' + input)
    };

  return (
    <div>
        <form onSubmit={handleSubmit} className="search">
            <input className="inp" value={input} onChange={(e) => {
                setInput(e.target.value);
            }}></input>
        </form>
    </div>
  )
}

export default Search