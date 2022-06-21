import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import { UserContext } from '../../context/context'
import { signOutUser } from '../../utils/firebase/FirebaseUtils'

import './Navigation.scss'

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext)

    const signOutHandler = async () => {
        await signOutUser()
        setCurrentUser(null)
    }
    
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <Logo className='logo'/>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className='nav-link' onClick={signOutHandler}>SIGNOUT</span>
                        )
                        : (
                            <Link className='nav-link' to='/sign-in'>SIGN IN</Link>
                        )
                    }
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation