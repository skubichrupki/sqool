import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Button from "./Button";

function CreateUser() {

    // const [current state, function(new state) to update state] = useState("");
    // so you change mobileValue to value of argument sent to setMobileValue function
    const[input_values, setInputValues] = useState({});

    const navigate = useNavigate();
    let action = '1';

    async function handleSubmit (event) {
        event.preventDefault();
        console.log(input_values);
        axios.post('http://localhost:81/sqool/mysql-app/php/index.php', {action, input_values}).then(function(response) {
            // on success data return, everything in echo from php
            // console.log(response.data);
            navigate('/SelectUser');
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

    return (
        <div>
            <form className="boxxy" onSubmit={handleSubmit}>
                Create User
                <FormInput label="Name" type="text" name="name" onChange={handleChange} isRequired={true} className="input-wrapper"/>
                <FormInput label="Email" type="text" name="email" onChange={handleChange} isRequired={true} className="input-wrapper"/>
                {/* <FormInput label="Mobile" type="text" name="mobile" value={mobileValue} onChange={handleChangeMobile} className="input-wrapper"/> */}
                <FormSelect label="Status" value="default" className="input-wrapper" isRequired={true}/>
                <Button type="submit" text="Submit"/>
            </form>
        </div>
        
    )
}

export default CreateUser;