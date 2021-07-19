import React, {useState} from 'react'

function FormHandling() {

    const [name, setName] = useState("");
    const [tnc, setTnc] = useState(false);
    const [interest, setInterest] =useState("");

    function getFormData(e)
    {
        console.warn(name, tnc, interest)
        e.preventDefault()
    }


    return (
        <div>
            <h1>Form Handling</h1>

            <form onSubmit={getFormData}>
                <input type="text"  placeholder="enter name" onChange={(e) => setName(e.target.value)} /> <br/><br/>

                <select onChange={(e) => setInterest(e.target.value)} >
                    <option value="one">one</option>
                    <option value="two">two</option>
                    <option value="three">three</option>
                </select> <br/><br/>

                <input type="checkbox" onChange={(e) => setTnc(e.target.checked)}  /> <span>Accept Terms and Conditions</span> <br /><br />

                <button type="submit">Submit</button>

            </form>


        </div>
    )
}

export default FormHandling
