import { signInWithGooglePopup } from "../../utils/firebase/FirebaseUtils"

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup()
        console.log(response)
    }

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>
                SignInWithGoogle
            </button>
        </div>
    )
}

export default SignIn