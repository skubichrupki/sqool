import FormInput from "./FormInput";
import Button from "./Button";
import { useState } from "react";
import axios from "axios";



const Login = ({label}) => {

    const [inputValues, setInputValues] =  useState({login: '', password: ''});

    const handleChange = (event) => {
        let inputName = event.target.name;
        let inputValue = event.target.value;
        // setInputValues(...oldInputValues, newInputValues)
        setInputValues((objectValues) => {
            return(
                {...objectValues, [inputName]: inputValue}
            )
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/login', inputValues).then(() => {
            console.log('success');
        }, () => {
            console.log('fail');
        })
    }

    return (
        <div>
            <form className="boxxy" onSubmit={handleSubmit}>
                {label}
                <FormInput type="text" label="Login" name="login" isRequired={true} onChange={handleChange} className="input-wrapper"/>
                <FormInput type="text" label="Password" name="password" isRequired={true} onChange={handleChange} className="input-wrapper"/>
                <Button type="submit" text="Submit"/>
            </form>
        </div>
    )
}

export default Login;