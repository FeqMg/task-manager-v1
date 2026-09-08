import style from './new-account-form.module.css'
import { useState } from 'react'
import Input from '../common/input';

function NewAccountForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <form className={style.main}>
            <Input
                type='text'
                placeholder='Username'
                value={username}
                onChange={(val) => setUsername(val)}
            />
            <Input
                type='email'
                placeholder='Email'
                value={email}
                onChange={(val) => setEmail(val)}
            />
            <Input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(val) => setPassword(val)}
            />
            <Input
                type='password'
                placeholder='Confirm password'
                value={confirmPassword}
                onChange={(val) => setConfirmPassword(val)}
            />
        </form>
    )
}

export default NewAccountForm