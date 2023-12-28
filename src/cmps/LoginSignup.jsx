import { useState } from 'react'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'
import { login, signup } from '../store/actions/user.actions.js'
import { LoginForm } from './LoginForm.jsx'
import { useNavigate } from 'react-router-dom'


export function LoginSignup() {

  const navigate = useNavigate()

    const [isSignup, setIsSignUp] = useState(false)

    function onLogin(credentials) {
        isSignup ? _signup(credentials) : _login(credentials)
    }

    async function _login(credentials) {
        try {
            await login(credentials)
            showSuccessMsg('Logged in successfully')
            navigate('/')
        } catch (err) {
            showErrorMsg('Oops try again')
        }
    }

    async function _signup(credentials) {
        try {
            await signup(credentials)
            showSuccessMsg('Signed in successfully')
            navigate('/')
        } catch (error) {
            showErrorMsg('Oops try again')
        }
    }

    return (
        <div className="login-page">
            <LoginForm
                onLogin={onLogin}
                isSignup={isSignup}
            />
            <div className="login-page-anchor">
                <a href="#" onClick={() => setIsSignUp(!isSignup)}>
                    {isSignup ?
                        'Already a member? Login' :
                        'New user? Signup here'
                    }
                </a >
            </div>
        </div >
    )
}
