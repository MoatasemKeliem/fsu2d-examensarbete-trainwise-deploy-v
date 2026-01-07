import { useState, type FormEvent } from 'react'
import useAccount from '../hooks/useAccount'
import type { ILogin } from '../model/ILogin'
import "../style/account.css"
import { FcGoogle } from "react-icons/fc";
import { BiLogoDiscordAlt } from "react-icons/bi";


const LoginComponent = () => {
    const { loginUser, loginWithDiscord, loginWithGoogle } = useAccount()
    const [error, setError] = useState("")
    const [login, setLogin] = useState<ILogin>({
        email: "",
        password: ""
    })


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        if (!login.email || !login.password) {
            setError("Email or password is missing");
            return
        }
        try {
            setError("");
            await loginUser(login);
        } catch (error) {
            setError("Invalid email or password");
        }

    }

    const handleGoogleLogin = () => {
        loginWithGoogle()
    }

    const handleDiscordLogin = () => {
        loginWithDiscord()
    }

    return (
        <section className='account-page'>


            <div className='account-div'>
                <form onSubmit={handleSubmit} className='account-form'>
                    {error && <p id='login-error-message'>{error}</p>}
                    <label htmlFor="">Email <br />
                        <input className={error ? "input-error" : ""} type="email" name='email' value={login.email} onChange={(e) => setLogin({ ...login, email: e.target.value })} /> <br />
                    </label> <br />

                    <label htmlFor="">Password <br />
                        <input className={error ? "input-error" : ""} type="password" name='password' value={login.password} onChange={(e) => setLogin({ ...login, password: e.target.value })} /> <br />
                    </label> <br />
                    <button type='submit'>Login</button>
                </form>

                <button id='google' onClick={handleGoogleLogin}><FcGoogle /> Login with Google</button><br />
                <button id='discord' onClick={handleDiscordLogin}><BiLogoDiscordAlt /> Login with Discord</button> <br />
            </div>
        </section>
    )
}

export default LoginComponent
