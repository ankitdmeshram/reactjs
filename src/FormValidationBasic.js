import React, {useState} from 'react'

function FormValidationBasic() {

    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const [userErr, setUserErr] = useState(false)
    const [passErr, setPassErr] = useState(false)

    function loginHandle(e) {

        if(user.length < 3 || pass < 3)
        {
            alert("Type Correct Values");
        }
        else {
            alert("All Good")
        }

        e.preventDefault()
    }

    function userHandler(e)
    {
        let item = e.target.value
        if(item.length < 3)
        {
            setUserErr(true)
        }
        else {
            setUserErr(false)
        }
        setUser(item)
    }

    function passHandler(e)
    {
        let item = e.target.value
        if(item.length < 3)
        {
            setPassErr(true)
        }
        else {
            setPassErr(false)
        }
        setPass(item)
    }

    return (
        <div>
            <h1>Form Validation Basic</h1>

            <form onSubmit={loginHandle}>
                <input type="text" placeholder="Enter User Id" onChange={userHandler} />  
                <br />
                {userErr ? <span>User Not Valid</span> : null}
                
                <br />
                <input type="text" placeholder="Enter User Password" onChange={passHandler} /> 
                <br />
                {passErr ? <span>Password Not Valid</span> : null}
                <br />
                <button type="submit" >Login</button>
            </form>

        </div>
    )
}

export default FormValidationBasic
