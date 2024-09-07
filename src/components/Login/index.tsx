import {FC, ReactElement, useState} from 'react';
import Field from '../Field';
import Button from '../Button';
import {validateEmail} from '../../validation';

import styles from './index.css';

const Login: FC = (): ReactElement => {
	const [emailValue, setEmailValue] = useState('');
	const [passwordValue, setPasswordValue] = useState('');

	const submit = (e) => {
		e.preventDefault();
		console.log('submit')
	}

	return (
		<div className={styles.login}>
			<div className={styles.icon}/>
			<div className={styles.title}>Добро пожаловать</div>
			<form method='post' onSubmit={submit}>
				<Field label='Почта' name='email' type='email' autocomplete='email' value={emailValue} setValue={setEmailValue} />
				{validateEmail(emailValue) && <Field label='Пароль' name='password' type='password' autocomplete='current-password' value={passwordValue} setValue={setPasswordValue} />}
				<Button disabled={!emailValue || !passwordValue}>Далее</Button>
			</form>
		</div>
	)
}

export default Login;