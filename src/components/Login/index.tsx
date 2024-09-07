import {FC, ReactElement, useState, FormEvent, useCallback} from 'react';
import Field from '../Field';
import Button from '../Button';
import {validateEmail} from '../../validation';

import styles from './index.css';

const Login: FC = (): ReactElement => {
	const [emailValue, setEmailValue] = useState('');
	const [passwordValue, setPasswordValue] = useState('');
	const [loading, setLoading] = useState(false);

	const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setLoading(true);
		const postData = {
			email: emailValue,
			password: passwordValue
		}

		try {
			const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(postData),
			});

			const result = await response.json();
			console.log(result);
		} catch {
			console.error('Error')
		} finally {
			setLoading(false);
		}
	}, [emailValue, passwordValue]);

	return (
		<div className={styles.login}>
			<div className={styles.icon}/>
			<div className={styles.title}>Добро пожаловать</div>
			<form method='post' onSubmit={handleSubmit}>
				<Field label='Почта' name='email' type='email' autocomplete='email' value={emailValue} setValue={setEmailValue} />
				{validateEmail(emailValue) && <Field label='Пароль' name='password' type='password' autocomplete='current-password' value={passwordValue} setValue={setPasswordValue} />}
				<Button disabled={!emailValue || !passwordValue || loading}>Далее</Button>
			</form>
		</div>
	)
}

export default Login;
