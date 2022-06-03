import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/FirebaseUtils"

import SignUpForm from "../../components/SignUpForm/SignUpForm"

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
            <SignUpForm />
        </div>
    )
}

export default SignIn