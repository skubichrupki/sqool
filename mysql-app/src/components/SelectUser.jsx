import axios from "axios";
import { useEffect, useState } from "react";
import Table from "./Table";

function SelectUser() {

    // change user list state
    const[itemArray, setItemArray] = useState([]);

    const backlogItemArray = itemArray.filter(item => item.status_id == 1);
    const inReviewItemArray = itemArray.filter(item => item.status_id == 2);
    const inProgressItemArray = itemArray.filter(item => item.status_id == 3);
    const doneItemArray = itemArray.filter(item => item.status_id == 4);
    itemArray.forEach((item) => {
        if (item.status_id == 2) {
        }
    })

    useEffect(function() {
        getItem();
    }, []);

    // get the reponse data
    function getItem() {
        axios.get('http://localhost:5000').then((response) => {
            setItemArray(response.data);
        }, (error) => {
            console.log('axios.get response error: ' + error);
        })
    }

    return (
        <div className="tableContent">
            <Table label="Backlog" status={backlogItemArray}/>
            <Table label="In Review" status={inReviewItemArray}/>
            <Table label="In Progress" status={inProgressItemArray}/>
            <Table label="Done" status={doneItemArray}/>
        </div>
    )
}

export default SelectUser;