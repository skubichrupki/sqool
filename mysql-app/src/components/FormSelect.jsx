import { useEffect, useState } from "react"
import axios from "axios";

const FormSelect = ({label, name, defaultValue, onChange, className, isRequired, tableName, keyColumn, valueColumn}) => {

    const [options, setOptions] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/table/${tableName}`).then((response) => {
            setOptions(response.data);
        })
    }, [])

    return (
        <div className={className}>
            <label>{label}:
                <select name={name} onChange={onChange} required={isRequired} value={defaultValue}>
                    <option value="">Choose Option...</option>
                    {options.map((option) => {
                        return (
                            <option key={option[keyColumn]} value={option[valueColumn]}>
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