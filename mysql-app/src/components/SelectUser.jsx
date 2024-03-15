import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function SelectUser() {

    // change user list state
    const[userArray, setUserArray] = useState([]);

    useEffect(function() {
        getUser();
    }, []);

    // get the reponse data
    function getUser() {
        axios.get('http://localhost:81/sqool/mysql-app/php/index.php').then(function(response) {
            setUserArray(response.data);
        }, function() {
            console.log('axios.get response error');
        })
    }

    return (
        <div className="content">
            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Created On</th>
                        <th>Updated On</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* for each user element in array userArray do function inside map */}
                    {userArray.map(user => (
                        <tr key={user.user_id}>
                            <td>{user.user_id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.created_on}</td>
                            <td>{user.updated_on}</td>
                            <td>
                                <Link to={`/UpdateUser/${user.user_id}`}>
                                    <Button text="Update"/>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default SelectUser;