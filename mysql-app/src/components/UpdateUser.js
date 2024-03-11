import FormInput from "./FormInput";

function UpdateUser() {

    let x = 1;

    function handleSubmit() {

    }

    function handleChange() {

    }

    return (
        <div >
            <p>Update User with ID {x}</p>
            <form onSubmit={handleSubmit}>
                <FormInput label="Name" type="text" name="name" onChange={handleChange} className="input-wrapper"/>
                <FormInput label="Email" type="text" name="email" onChange={handleChange} className="input-wrapper"/>
                {/* <FormInput label="Mobile" type="text" name="mobile" value={mobileValue} onChange={handleChangeMobile} className="input-wrapper"/> */}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UpdateUser;