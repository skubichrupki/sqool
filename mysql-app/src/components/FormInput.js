function FormInput({label, type, name, value, onChange, className}) {

    return(
        <div className={className}>
            <label>{label}:
                <input type={type} name={name} value={value} onChange={onChange}/>
            </label>
        </div>
    )
}

export default FormInput;