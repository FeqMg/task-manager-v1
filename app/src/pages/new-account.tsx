import style from './new-account.module.css'
import NewAccountForm from '../components/new-account/new-account-form'
import type { NewUser } from '../types/forms'

function NewAccount() {
    const url = import.meta.env.VITE_SERVER_URL;

    async function submit(dataU: NewUser, event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        try {
            const res = await fetch(`${url}new-user`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dataU)
            });
            const data = await res.json();

            if (!res.ok) {
                console.log(data.msg);
            }

            console.log(data.msg);
        } catch (error) {
            console.log("Something went wrong during fetch..");
            console.error(error);
        }
    }

    return (
        <div className={style.main}>
            <NewAccountForm handleSubmit={(data, event) => submit(data, event)} onBack={() => null} />
        </div>
    )
}

export default NewAccount