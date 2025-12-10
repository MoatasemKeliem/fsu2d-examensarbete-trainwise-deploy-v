import { useState, type FormEvent } from 'react'
import useAccount from '../hooks/useAccount'
import type { ILogin } from '../model/ILogin'

const LoginComponent = () => {
    const { loginUser, loginWithDiscord, loginWithGoogle } = useAccount()
    const [login, setLogin] = useState<ILogin>({
        email: "",
        password: ""
    })

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        await loginUser(login)
    }

    const handleGoogleLogin = () => {
        loginWithGoogle()
    }

    const handleDiscordLogin = () => {
        loginWithDiscord()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Email <br />
                    <input type="email" name='email' value={login.email} onChange={(e) => setLogin({ ...login, email: e.target.value })} /> <br />
                </label> <br />

                <label htmlFor="">password <br />
                    <input type="password" name='password' value={login.password} onChange={(e) => setLogin({ ...login, password: e.target.value })} /> <br />
                </label> <br />
                <button type='submit'>Login</button>
            </form>

            <button onClick={handleGoogleLogin}>Login with Google</button><br />
            <button onClick={handleDiscordLogin}>Login with Discord</button> <br />
        </div>
    )
}

export default LoginComponent
