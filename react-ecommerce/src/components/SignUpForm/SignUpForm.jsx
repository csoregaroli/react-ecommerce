import { useState } from 'react'

import FormInput from '../FormInput/FormInput'
import Button from '../Button/Button'
import './SignUpForm.scss'

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/FirebaseUtils'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields

    const handleChange = e => {
        const { name, value }  = e.target

        setFormFields({ ...formFields, [name]: value })
    }

    const handleSubmit = async e => {
        e.preventDefault()

        if (password !== confirmPassword) { 
            alert("passwords do not match")
            return
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email,password)

            await createUserDocumentFromAuth(user, { displayName })

            setFormFields(defaultFormFields)
            
        } catch(error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('Email already associated with a different account.')
            }
            console.log('user creation encountered an error', error)
        }
    
    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Display Name' 
                    type='text' 
                    required 
                    onChange={handleChange} 
                    name="displayName" 
                    value={displayName} 
                />
                <FormInput
                    label='Email' 
                    type='email' 
                    required 
                    onChange={handleChange} 
                    name="email" 
                    value={email}
                />
                <FormInput
                    label='Password' 
                    type='password'
                    required 
                    onChange={handleChange} 
                    name="password" 
                    value={password}
                />
                <FormInput
                    label='Confirm Password' 
                    type='password' 
                    required 
                    onChange={handleChange} 
                    name="confirmPassword" 
                    value={confirmPassword}
                />
                
                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm