import axios from "axios";
import { useEffect, useState } from "react";

function SelectUser() {

    // change user list state
    const[user, setUser] = useState([]);

    // to do: useEffect function for get method
    // include get method in php script
    useEffect(function() {
        getUser();
    }, []);

    // get the reponse data
    function getUser() {
        axios.get('http://localhost:81/sqool/mysql-app/php/index.php').then(function(response) {
            console.log('response data:');
            console.log(response.data);
            setUser(response.data);
        }, function() {
            console.log('axios.get response error');
        })
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Created On</th>
                        <th>Updated On</th>
                    </tr>
                </thead>
                <tbody>
                    {/* to do: read about .map() function  */}
                    {user.map(user => (
                        <tr key={user.user_id}>
                            <td>{user.user_id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.created_on}</td>
                            <td>{user.updated_on}</td>


                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default SelectUser;