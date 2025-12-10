import { useState, type FormEvent } from "react"
import useAccount from "../hooks/useAccount"
import type { IRegister } from "../model/IRegister"
import { Link } from "react-router-dom"

const RegisterComponent = () => {
    const { registerUser } = useAccount()
    const [register, setRegister] = useState<IRegister>({
        name: "",
        email: "",
        password: ""
    })

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        await registerUser(register)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Name <br />
                    <input type="text" name="name" value={register.name} onChange={(e) => setRegister({ ...register, name: e.target.value })} required /> <br />
                </label><br />
                <label htmlFor="">Email <br />
                    <input type="email" name="email" value={register.email} onChange={(e) => setRegister({ ...register, email: e.target.value })} required /> <br />
                </label><br />
                <label htmlFor="">Password <br />
                    <input type="password" name="password" value={register.password} onChange={(e) => setRegister({ ...register, password: e.target.value })} required /> <br />
                </label><br />
                <button type="submit">Register</button>
            </form>
            <Link to={"/login"}>Already have an account</Link>
        </div>
    )
}

export default RegisterComponent
