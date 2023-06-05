import {Url} from "../utils/constants";
import {Link} from "react-router-dom";
import './style.css'
import {useState} from "react";

const LoginPage = () => {
    const [change, setChange] = useState(false)
    const [text, setText] = useState('')

    const handleSubmit = () => {
        setChange(true)

    }
    return (
        <>
            <Link to={'/'} className='exit'>exit</Link>
            <div className='container-Draw'>
                {Url.Search.map(({Poster, Title, Type, Year}) => (
                    <div className='child-container'>
                        <img src={Poster} alt='img'/>
                        <h2>{Title}</h2>
                        <h3>{Type}</h3>
                        <p>{Year}</p>
                        <button onClick={handleSubmit}>modify</button>
                        {change ?  <input type="text" onChange={(e) => {
                            setText(e.target.value)
                            {Title = text}
                        }}/> : null}
                    </div>
                ))}
            </div>
        </>
    )
};
export default LoginPage;