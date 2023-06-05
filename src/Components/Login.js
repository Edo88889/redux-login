import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {password} from "../Store/Action/LoginAction";
import {email} from "../Store/Action/LoginAction";

function Login() {
    const regexp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const passwords = useSelector(state => state.isPassword)
    const emails = useSelector(state => state.isEmail)

    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const [texts, setTexts] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (text.length < 3 || text.length > 10) {
            dispatch(password('password error'))
        }if (!regexp.test(texts)){

            dispatch(email('email error'))
        }
else {
    navigate('/login-page')
}

    }
    console.log(passwords,111)
    console.log(emails,222)
    return (
        <form onSubmit={handleSubmit}>
            {(emails) && <div style={{color: 'red'}}>{emails}</div>}
            <input
                onChange={(e) => {
                    setTexts(e.target.value)
                }}
                   value={texts}
                   type='text'
                   placeholder='email'

            />
            {(passwords) && <div style={{color: 'red'}}>{passwords}</div>}
            <input onChange={(e) => {
                setText(e.target.value)
            }}
                   value={text}
                   type='password'
                   placeholder='password'/>
            <button  type='submit'>login
            </button>
        </form>

    );
}

export default Login;