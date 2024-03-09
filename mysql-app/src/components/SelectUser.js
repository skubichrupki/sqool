import axios from "axios";

function SelectUser() {

    // to do: useEffect function for get method
    // include get method in php script

    // get the reponse data
    axios.get('http://localhost:80/sqool/mysql-app/php/index.php').then(function (response) {
        console.log(response.data);
    }, function () {
        console.log('axios.get response error');
    })


    return (
        <div>
            Select User
        </div>
    )
}

export default SelectUser;