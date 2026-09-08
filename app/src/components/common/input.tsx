import style from './input.module.css'

type InputProps = {
    type: 'text' | 'email' | 'password',
    placeholder: string,
    value: string,
    onChange: (val: string) => void,
}

function Input({ type, placeholder, value, onChange }: InputProps) {
    return (
        <input
            className={style.main}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}

export default Input