import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import { useState } from "react";
import axios from 'axios';
import Button from "./Button";
import Notification from "./Notification";

function CreateUser({label}) {

    const[input_values, setInputValues] = useState({});
    const[notification, setNotification] = useState('');

    async function handleSubmit (event) {
        event.preventDefault();
        console.log(input_values);
        axios.post('http://localhost:5000/CreateUser', input_values).then((response) => {
            // navigate('/SelectUser');
            console.log(response.data);
            setNotification(response.data);
        },(error) => {
            console.log(error);
        });
    }

    const handleChange = (event) => {
        const input_name = event.target.name;
        const input_value = event.target.value;
       
        // else if select
        // old object values turning into new with new key-value pairs
        setInputValues((object_values) => {
            return({...object_values, [input_name]: input_value})
        });
        console.log(input_values);
        console.log(event.target.value);
        console.log(event.target.name);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="boxxy">
                {label}
                <FormInput type="text" label="Item Number" name="item_number" isRequired={true} onChange={handleChange} value={input_values['item_number']} className="input-wrapper"/>
                <FormInput type="text" label="Item Description"  name="item_description" isRequired={true} onChange={handleChange} value={input_values['item_description']} className="input-wrapper"/>
                <FormSelect label="Status" name="status_id" isRequired={true} onChange={handleChange} tableName="status" value={input_values['status_id']} keyColumn="status_id" valueColumn="description" className="input-wrapper"/>
                <Button type="submit" text="Submit"/>
                {notification ? <Notification message={notification} className="boxxy notification"/> : null}
            </form>
        </div>
        
    )
}

export default CreateUser;