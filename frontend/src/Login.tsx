import { useState } from 'react'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom'
function Login() {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const user = {
            email: email,
            password: password
        }
        try {
            const response = await axios.post('http://localhost:4000/api/v1/auth/sign-in', user);
            console.log()
            if (response.status == 200) {
                navigate("../landing")
            }
          } catch (error) {
            console.error('Error signing in:', error);
          }
        
    }

    return (
        <div className="bg-signup">
            <div className='flex justify-between'>
                <div className='bg-light-green text-blue text-lg p-2 mt-5 ml-5'>LLW</div>
                <div className='text-beige mt-5 mr-5 space-x-3'>
                    <Link to="../">home</Link>
                    <Link to="../signup">sign up</Link>
                </div>
            </div>
            <div className="h-screen flex items-center justify-center">
                <form onSubmit={handleLogin} className='space-y-4'>
                <div className='flex justify-center font-bold text-5xl text-light-green'>LOGIN</div>
                    
                    <div>
                        <input
                        className='bg-beige rounded-lg p-3 placeholder-blue caret-blue text-blue w-full max-w-xs'
                        type='email'
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                        required/>
                    </div>
                    <div>
                        <input
                        className='bg-beige rounded-lg p-3 placeholder-blue caret-blue text-blue w-full max-w-xs'
                        type='password'
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete='current-password'
                        required/>
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-light-green text-brown p-2 rounded-lg font-bold' type='submit'>Login!</button>
                    </div>
                    
                </form>
            </div>
            
        </div>
    )
}

export default Login