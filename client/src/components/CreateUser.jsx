import FormInput from "./ui/FormInput";
import FormSelect from "./ui/FormSelect";
import { useState } from "react";
import axios from 'axios';
import Button from "./ui/Button";
import Notification from "./ui/Notification";

function CreateUser({ port, label }) {

    const[input_values, setInputValues] = useState({item_number: '', item_description: ''});
    const[notification, setNotification] = useState('');

    const handleChange = (event) => {
        const input_name = event.target.name;
        const input_value = event.target.value;
       
        // old object values turning into new with new key-value pairs
        setInputValues((object_values) => {
            return({...object_values, [input_name]: input_value})
        });
    }
    
    async function handleSubmit (event) {
        event.preventDefault();
        console.log(input_values);
        axios.post(`http://localhost:${port}/item`, input_values).then((response) => {
            // navigate('/SelectUser');
            console.log(response.data);
            setNotification(response.data);
        },(error) => {
            console.log(error);
            setNotification(error.message);
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="boxxy">
                {label}
                <FormInput type="text" label="Item Number" name="item_number" isRequired={true} onChange={handleChange} value={input_values['item_number']} className="input-wrapper"/>
                <FormInput type="text" label="Item Description"  name="item_description" isRequired={true} onChange={handleChange} value={input_values['item_description']} className="input-wrapper"/>
                <FormSelect port={port} label="Status" name="status_id" isRequired={true} onChange={handleChange} tableName="status" value={input_values['status_id']} keyColumn="status_id" valueColumn="description" className="input-wrapper"/>
                <Button type="submit" text="Submit"/>
                {notification ? <Notification message={notification} className="boxxy notification"/> : null}
            </form>
        </div>
        
    )
}

export default CreateUser;