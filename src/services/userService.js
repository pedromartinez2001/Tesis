import axios from './axios'


const registerUser =async(user)=>{
    try {
        return await axios.post(`/register`,user)
    } catch (error) {
        console.log(error);
    }
}
const loginUser =async(user)=>{
    try {
        return await axios.post(`/login`,user)
    } catch (error) {
        console.log(error);
    }
}

export default {registerUser,loginUser}