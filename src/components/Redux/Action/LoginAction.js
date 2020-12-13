import axios from 'axios'

export const authenticateUser = (userDetails) => {
    
    return (dispatch) => {
        return axios.post('https://counsellinggurus.in:3001/auth/login/', userDetails)
            .then(res => {
                console.log(res)
                const {token} = res.data;
                
                if (res.data.success === true) {
                    dispatch({
                        type: 'login',
                        payload: res.data.success
                    });
                    localStorage.setItem('token', token);
                }
                else {
                    alert("wrong credentials");
                }
            })
    }
}
