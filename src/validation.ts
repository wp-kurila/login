import { Dispatch, SetStateAction } from 'react';

export const validateEmail = (email: string): boolean => {
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return emailRegex.test(email);
  };

const validate = (type: string, value: string, setError: Dispatch<SetStateAction<string>>): void => {
	if (type === 'email') {
		if (!value) {
			setError('Почта не может быть пустой');
		} else if (!validateEmail(value)) {
			setError('Укажите корректную почту');
		}
	}

	if (type === 'password') {
		if (!value) {
			setError('Пароль не может быть пустым');
		}
	}
}

export default validate;