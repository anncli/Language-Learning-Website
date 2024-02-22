import { useState } from 'react'
import axios from 'axios'
function Signup() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [nationality, setNationality] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const user = {
            email: email,
            firstName: firstName,
            lastName: lastName,
            nationality: nationality,
            password: password
        }
        try {
            const response = await axios.post('/api/v1/auth/signup', user);
            console.log('User created:', response.data);
          } catch (error) {
            console.error('Error creating user:', error);
          }
        
    }

    return (
        <div>
            <form onSubmit={handleSignup}>
                <div>
                    <input
                    type='text'
                    placeholder='First Name'
                    onChange={(e) => setFirstName(e.target.value)}
                    required/>
                </div>
                <div>
                    <input
                    type='text'
                    placeholder='Last Name'
                    onChange={(e) => setLastName(e.target.value)}
                    required/>
                </div>
                <div>
                    <input
                    type='text'
                    placeholder='Nationality'
                    onChange={(e) => setNationality(e.target.value)}
                    required/>
                </div>
                <div>
                    <input
                    type='email'
                    placeholder='email'
                    onChange={(e) => setEmail(e.target.value)}
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
                
                <button type='submit'>Sign up!</button>
            </form>
        </div>
    )
}

export default Signup