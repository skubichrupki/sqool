import { useEffect, useState } from "react"

const FormSelect = ({label, name, defaultValue, className, isRequired, keyColumn, valueColumn}) => {

    const [options, setOptions] = useState([]);

    useEffect(() => {
        // get table logic
    }, [])

    return (
        <div className={className}>
            <label>{label}:
                <select name={name} required={isRequired} value={defaultValue}>
                    <option value="">select option</option>
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