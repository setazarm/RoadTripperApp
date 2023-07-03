import {useState,FC, FormEvent} from 'react'
interface User {
    username: string,
    password: string
}

const Login :FC = () => {
    const [user, setUser] = useState<User>({
        username: '',
        password: ''

    })
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const target = e.target as typeof e.target & {
            username: { value: string } 
            password: { value: string }

        }
        setUser({
            username: target.username.value,
            password: target.password.value
        })
        console.log(user)

    }
  return (
    <div>Login
        <form  onSubmit={submitHandler}>
            <input name="username" type="text" placeholder="Username" />
            <input name="password" type="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login