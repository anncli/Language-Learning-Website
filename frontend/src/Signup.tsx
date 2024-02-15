import { useState } from 'react'

function Signup() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(`email: ${email}`)
        console.log(`username: ${username}`)
        console.log(`password: ${password}`)
    }

    return (
        <div>
            <form onSubmit={handleSignup}>
                <div>
                    <input
                    type='text'
                    placeholder='username'
                    onChange={(e) => setUsername(e.target.value)}
                    autoComplete='username'
                    required/>
                </div>
                <div>
                    <input
                    type='password'
                    placeholder='password'
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete='current-password'
                    required/>
                </div>
                <div>
                    <input
                    type='email'
                    placeholder='email'
                    onChange={(e) => setEmail(e.target.value)}
                    required/>
                </div>
                <button type='submit'>Sign up!</button>
            </form>
        </div>
    )
}

export default Signup