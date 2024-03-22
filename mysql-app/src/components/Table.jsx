import React from "react";
import { useNavigate } from 'react-router-dom';

const Table = ({status, label, counter}) => {

        const navigate  = useNavigate();
      
        const handleRowClick = (itemId) => {
          navigate(`/UpdateUser/${itemId}`);
        };

    return(
        <div className="tableHolder">
            <div className="tableLabel">{label}: {counter}</div>
            <table>
                <thead>
                    <tr>
                        <th>Item ID</th>
                        <th>Item Number</th>
                        <th>Created On</th>
                    </tr>
                </thead>
                <tbody>
                    {/* for each user element in array userArray do function inside map */}
                    {status.map(item => (
                            <tr key={item.item_id} onClick={() => {handleRowClick(item.item_id)}}>
                                <td>{item.item_id}</td>
                                <td>{item.item_number}</td>
                                <td>{item.created_on}</td>
                            </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table;