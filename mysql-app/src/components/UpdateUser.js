import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import FormInput from "./FormInput";
import Button from "./Button";

function UpdateUser() {

    // get user_id value from "http://localhost:3000/UpdateUser/:user_id"
    const {user_id} = useParams();
    const[input_values, setInputValues] = useState({name: '', email:''});
    useEffect(getUser, [user_id]);
    let action = '2';

    function getUser() {
        axios.get(`http://localhost:81/sqool/mysql-app/php/index.php?user_id=${user_id}`).then((response) => {
            console.log(response.data[0]);
            setInputValues(response.data[0]);
        });
    }
    // like ready() or document load

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(input_values);
        axios.post('http://localhost:81/sqool/mysql-app/php/index.php', {action, input_values}).then((response) => {
            console.log(response);
        });

    }

    const handleChange = (event) => {
        console.log(event.target.value);
        const input_name = event.target.name;
        const input_value = event.target.value;
        // taken from CreateUser.js
        setInputValues(object_values => ({...object_values, [input_name]: input_value}));
    }

    return (
        <div>
            <form className='boxxy' onSubmit={handleSubmit}>
                Update User ID: {user_id}
                <FormInput label="Name" type="text" name="name" onChange={handleChange} value={input_values['name']} className="input-wrapper"/>
                <FormInput label="Email" type="text" name="email" onChange={handleChange} value={input_values['email']} className="input-wrapper"/>
                <Button type="submit" text="Submit"/>
            </form>
            <br />
            <Link to={`/SelectUser`}>
                <Button text={"Back to list"}/>
            </Link>
        </div>
    )
}

export default UpdateUser;