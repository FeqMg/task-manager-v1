import style from './new-account.module.css'
import NewAccountForm from '../components/new-account/new-account-form'

function NewAccount() {
    return(
        <div className={style.main}>
            <NewAccountForm/>
        </div>
    )
}

export default NewAccount