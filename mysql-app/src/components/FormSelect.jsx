const FormSelect = ({label, name, defaultValue, className}) => {
    return (
        <div className={className}>
            <label>{label}:
                <select name={name} required value={defaultValue}>
                    <option value="">Select:</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
            </label>
        </div>
    )
}

export default FormSelect