import './Form.css'
import React from "react";
import { validation } from './Validations';

const Form = ({login}) => {

    const [userData, setUserData] = React.useState({
        username:'',
        password:'',
    });

    const [errors, setErrors] = React.useState({
        username:'',
        password:'',
    });

    const handleInputChange = (e) => {
        const { value, name } = e.target
        setUserData({
            ...userData,
            [name]: value
        })
        setErrors(
            validation({
                ...userData,
                [name]: value,
            })
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login(userData);
    }

    return(
        <div className='container'>
            <form onSubmit={handleSubmit}>
            <h3>Por cuestion de pruebas... El user es rickmorty@gmail.com y la contraseña serie1234</h3>
            <label name='username'> Username: </label>
            <input type='text' name='username' value={userData.username} onChange={handleInputChange} />
            {errors.username !== ''? <p className='danger' >{errors.username}</p> : ''}
            <label name='password'> Password: </label>
            <input type='text' name='password' value={userData.password} onChange={handleInputChange} />
            {errors.password !== ''? <p className='danger' >{errors.password}</p> : ''}
            <button type='submit'> Login </button>
            </form>
        </div>
    )
}

export default Form;