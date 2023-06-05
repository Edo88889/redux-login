export const email = (payload) => {
    return{
        type: 'EMAIL',
        payload: payload
    }
}
export const password = (payload) => {
    return{
        type: 'PASSWORD',
        payload: payload
    }
}