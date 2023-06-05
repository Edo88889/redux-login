const initialState = {
        isEmail: '',
        isPassword: ''
}
 function LoginReducer  (state = initialState, action)  {
    if (action.type === 'EMAIL'){
        return {
            ...state,isEmail: action.payload
        }
    }
    if (action.type === 'PASSWORD'){

        return {
            ...state,isPassword: action.payload
        }
    }
    return state
        };
export default LoginReducer
