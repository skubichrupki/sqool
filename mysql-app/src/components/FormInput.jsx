function FormInput({label, type, name, value, onChange, className, isRequired}) {

    return(
        <div className={className}>
            <label>{label}:
                <input type={type} name={name} value={value} onChange={onChange} required={isRequired}/>
            </label>
        </div>
    )
}

export default FormInput;