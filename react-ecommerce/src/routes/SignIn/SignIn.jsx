import SignUpForm from "../../components/SignUpForm/SignUpForm"
import SignInForm from "../../components/SignInForm/SignInForm"

import "./SignIn.scss"

const SignIn = () => {
    return (
        <div className='authentication-container'>
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default SignIn