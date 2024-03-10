import FormInput from "./FormInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function CreateUser() {

    // const [current state, function(new state) to update state] = useState("");
    // so you change mobileValue to value of argument sent to setMobileValue function
    const[input_values, setInputValues] = useState({});
    // const[mobileValue, setMobileValue] = useState("");

    const navigate = useNavigate();
    let action = '1';

    async function handleSubmit (event) {
        event.preventDefault();
        console.log(input_values);
        axios.post('http://localhost:80/sqool/mysql-app/php/index.php', {action, input_values}).then(function(response) {
            // on success data return, everything in echo from php
            console.log(response.data);
            navigate('/user/SelectUser');
        }, function () {
            console.log('axios.post response error');
        });
    }

    const handleChange = (event) => {
        const input_name = event.target.name;
        const input_value = event.target.value;
        // old object values turning into new with new key-value pairs
        setInputValues(object_values => ({...object_values, [input_name]: input_value}));
    }

    // const handleChangeMobile = (event) => {
    //     console.log(event.target.value);
    //     setMobileValue(event.target.value);
    // }

    return (
        <form onSubmit={handleSubmit}>
            <FormInput label="Name" type="text" name="name" onChange={handleChange} className="input-wrapper"/>
            <FormInput label="Email" type="text" name="email" onChange={handleChange} className="input-wrapper"/>
            {/* <FormInput label="Mobile" type="text" name="mobile" value={mobileValue} onChange={handleChangeMobile} className="input-wrapper"/> */}
            <button type="submit">Submit</button>
        </form>
    )
}

export default CreateUser;