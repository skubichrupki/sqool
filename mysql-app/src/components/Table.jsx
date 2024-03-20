import React from "react";
import { Link } from "react-router-dom";

const Table = ({status, label}) => {
    return(
        <div>
            {label}
            <table>
                <thead>
                    <tr>
                        <th>Item ID</th>
                        <th>Item Number</th>
                        {/* <th>Status</th> */}
                        <th>Created On</th>
                        {/* <th>Updated On</th> */}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* for each user element in array userArray do function inside map */}
                    {status.map(item => (
                        <tr key={item.item_id}>
                            <td>{item.item_id}</td>
                            <td>{item.item_number}</td>
                            {/* <td>{item.status}</td> */}
                            <td>{item.created_on}</td>
                            {/* <td>{item.updated_on}</td> */}
                            <td>
                                <Link to={`/UpdateUser/${item.item_id}`}>
                                    <p>Update</p>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table;