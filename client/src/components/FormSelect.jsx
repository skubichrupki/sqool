import { useEffect, useState } from "react"
import axios from "axios";

const FormSelect = ({label, name, value, onChange, className, isRequired, tableName, keyColumn, valueColumn, port}) => {

    const [options, setOptions] = useState([]);

    // whenever the port changes, get the data from the table
    useEffect(() => {
        axios.get(`http://localhost:${port}/table/${tableName}`).then((response) => {
            setOptions(response.data);
        })
    }, [port])

    return (
        <div className={className}>
            <label>{label}:
                <select name={name} onChange={onChange} required={isRequired} value={value}>
                    <option value="">Choose Option...</option>
                    {options.map((option) => {
                        return (
                            <option key={option[keyColumn]} value={option[keyColumn]}>
                                {option[valueColumn]}
                            </option>
                        )
                        })}
                </select>
            </label>
        </div>
    )
}

export default FormSelect