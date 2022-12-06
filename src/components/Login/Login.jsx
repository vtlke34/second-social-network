import style from './Login.module.css'
import { Field, reduxForm } from 'redux-form'
import { Navigate } from 'react-router-dom'
import { maxLength, required } from '../../utils/validators/validator'
import { InputFormComponent } from '../Common/InputFormComponents'

const LoginForm = (props) => {
    const maxLength15 = maxLength(15)

    return (
        <form onSubmit={props.handleSubmit} className={style.form}>
            <div>
                <Field component={InputFormComponent} className={style.input} placeholder='email' type="text" name={"email"} validate={[required]} />
            </div>
            <div>
                <Field component={'input'} className={style.input} placeholder='password' type="password" name={"password"} />
            </div>
            <div>
                <Field component={'input'} className={style.checkbox} type="checkbox" name={"rememberMe"} />
                <span>remember me</span>
            </div>
            <div>
                <button type='submit' className={style.button}>Login</button>
            </div>

        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (data) => {
        props.loginThunk(data)
    }

    if (props.auth.isAuth) {
        return <Navigate to='/profile' />
    }

    return (
        <div className={style.login}>
            <h1 className={style.title}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
            {
                props.auth.warning
                    ? <span className={style.warning}>Ошибка, повторите попытку</span>
                    : undefined
            }
        </div>
    )
}

export default Login