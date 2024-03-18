import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Button from "./Button";
import Notification from "./Notification";

function CreateUser() {

    // const [current state, function(new state) to update state] = useState("");
    // so you change mobileValue to value of argument sent to setMobileValue function
    const[input_values, setInputValues] = useState({});
    const[notification, setNotification] = useState('');

    const navigate = useNavigate();

    async function handleSubmit (event) {
        event.preventDefault();
        console.log(input_values);
        axios.post('http://localhost:5000', input_values).then(function(response) {
            // navigate('/SelectUser');
            console.log(response.data);
            setNotification(response.data);
        }, function () {
            console.log('axios.post response error');
        });
    }

    const handleChange = (event) => {
        const input_name = event.target.name;
        let input_value;
        // if input
        if (event.target.tagName == 'INPUT') {
            input_value = event.target.value;
        }
        else if (event.target.tagName == 'SELECT') {
            input_value = event.target.selectedIndex;
        }
        // else if select
        // old object values turning into new with new key-value pairs
        setInputValues(object_values => ({...object_values, [input_name]: input_value}));
        console.log(input_values);
        console.log(event.target.value);
        console.log(event.target.name);
        console.log(event.target.selectedIndex);
    }

    return (
        <div>
            <form className="boxxy" onSubmit={handleSubmit}>
                Create User
                <FormInput label="Name" type="text" name="name" onChange={handleChange} isRequired={true} className="input-wrapper"/>
                <FormInput label="Email" type="text" name="email" onChange={handleChange} isRequired={true} className="input-wrapper"/>
                <FormSelect label="Status" name="status_id" onChange={handleChange} isRequired={true} tableName="status" keyColumn="status_id" valueColumn="description" className="input-wrapper"/>
                <Button type="submit" text="Submit"/>
            </form>
            {notification ? <Notification message={notification} className="boxxy"/> : null}
        </div>
        
    )
}

export default CreateUser;