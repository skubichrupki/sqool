import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import FormInput from "./ui/FormInput";
import FormSelect from "./ui/FormSelect";
import Button from "./ui/Button";
import Notification from "./ui/Notification";

function UpdateUser({port, label}) {

    // get item_id value from "http://localhost:3000/UpdateUser/:item_id"
    const {item_id} = useParams();

    const [notification, setNotification] = useState('');
    const[input_values, setInputValues] = useState({item_number:'', item_description:'', status_id:''});
    
    // like ready() or document load
    useEffect(() => {
        getItem();
    }, [item_id, port]);

    const getItem = () => {
        axios.get(`http://localhost:${port}?item_id=${item_id}`).then((response) => {
            setInputValues(response.data[0]);
            console.log(response.data[0]);
        }, (error) => {
            console.log('axios.get response error: ' + error);
        });
    } 

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(input_values);
        // put is used to overwrite the data
        axios.put(`http://localhost:${port}?item_id=${item_id}`, input_values).then((response) => {
            // navigate('/SelectUser');
            setNotification(response.data);
        });
    }

    const handleChange = (event) => {
        const input_name = event.target.name;
        const input_value = event.target.value;
        setInputValues(object_values => ({...object_values, [input_name]: input_value}));
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='boxxy'>
                {label} {item_id}
                <FormInput type="text" label="Item Number" name="item_number" isRequired={true} onChange={handleChange} value={input_values['item_number']} className="input-wrapper"/>
                <FormInput type="text" label="Item Description"  name="item_description" isRequired={true} onChange={handleChange} value={input_values['item_description']} className="input-wrapper"/>
                <FormSelect port={port} label="Status" name="status_id" isRequired={true} onChange={handleChange} tableName="status" value={input_values['status_id']} keyColumn="status_id" valueColumn="description" className="input-wrapper"/>
                <Button type="submit" text="Submit"/>
                <div className="button-back-container">
                    <Link to={`/SelectUser`}>
                        <Button text={"Back to list"}/>
                    </Link>
                </div>
                {/* notification after submit */}
                {notification ? <Notification message={notification} className="boxxy notification"/> : null}
            </form>
        </div>
    )
}

export default UpdateUser;