import axios from "axios";
import { useState, useEffect } from "react";

const BackendTest = () => {

    const[data, setData] = useState(null);

    useEffect( () => {
        axios.get('http://localhost:5000/').then( (response) => {
            console.log(response.data);
        })
    }, []);

    return(
        <div>
            test
        </div>
    )
}

export default BackendTest;