import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/FirebaseUtils"

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
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