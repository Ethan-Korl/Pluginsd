import Input from "../components/Input"
import CustomButton from "../components/CustomButton"
import { useState } from "react"
import { Link } from "react-router-dom"
// import

export default function SignUp(){
    const [codeRequested, setCodeRequested] = useState(false)

    function handleSubmit(){
        setCodeRequested(true)
    }
    

    return (
        <div className="form-container">
            <div>
                <img 
                    src="assets/svg/reg.svg"
                />
            </div>

            <form method="POST" className="form-container-2">
                <img 
                    src="logo.png"
                />
                <h3>Please Enter Details</h3>
                <Input placeholder={"Email"} type={"email"} />
                {codeRequested?
                (<Input placeholder={"Code"} type={"text"} />):
                null
                }
                <CustomButton title={"Submit"} onClick={handleSubmit}/>
                <Link id="have-account" to={"/login"}>Already have an account?</Link>
            </form>
        </div>
    )
}