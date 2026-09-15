import style from './new-account-form.module.css'
import { useState } from 'react'
import Input from '../common/input';
import Button from '../common/button';
import type { NewUser } from '../../types/forms';

type NewAccountForm = {
    onSubmit: (data: NewUser) => void,
    onBack: () => void,
}

function NewAccountForm({ onSubmit, onBack }: NewAccountForm) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <form className={style.main}>
            <h1>New Account</h1>
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
            <Button
                text='Submit'
                type='submit'
                onClick={() => onSubmit(
                    {
                        username: username,
                        email: email,
                        password: password,
                        confirmPassword: confirmPassword
                    }
                )}
            />
            <Button
                text='Back'
                onClick={() => onBack}
            />
        </form>
    )
}

export default NewAccountForm