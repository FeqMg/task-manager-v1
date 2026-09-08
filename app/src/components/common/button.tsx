import style from './button.module.css'

type ButtonProps = {
    text: string,
    type?: 'submit' | 'reset' | 'button' | undefined,
    onClick: () => void,
}

function Button({ text, type, onClick }: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={style.main}>
            {text}
        </button>
    )
}

export default Button