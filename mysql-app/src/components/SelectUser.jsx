import axios from "axios";
import { useEffect, useState } from "react";
import Table from "./Table";

function SelectUser() {

    // change user list state
    const[itemArray, setItemArray] = useState([]);

    const backlogItemArray = itemArray.filter(item => item.status_id === 1);
    const inReviewItemArray = itemArray.filter(item => item.status_id === 2);
    const inProgressItemArray = itemArray.filter(item => item.status_id === 3);
    const doneItemArray = itemArray.filter(item => item.status_id === 4);
    
    const backlogItemArrayCounter = backlogItemArray.length;
    const inReviewItemArrayCounter = inReviewItemArray.length;
    const inProgressItemArrayCounter = inProgressItemArray.length;
    const doneItemArrayCounter = doneItemArray.length;

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
            <Table label="Backlog" counter={backlogItemArrayCounter}status={backlogItemArray}/>
            <Table label="In Review" counter={inReviewItemArrayCounter} status={inReviewItemArray}/>
            <Table label="In Progress" counter={inProgressItemArrayCounter} status={inProgressItemArray}/>
            <Table label="Done" counter={doneItemArrayCounter} status={doneItemArray}/>
        </div>
    )
}

export default SelectUser;