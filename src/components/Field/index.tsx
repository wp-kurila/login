import {FC, ReactElement, useState, useCallback, ChangeEvent, Dispatch, SetStateAction, useEffect} from 'react';
import cn from 'classnames';
import validaion from '../../validation';

import styles from './index.css';

interface Props {
	label: string;
	name: string;
	type: string;
	autocomplete: string;
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
}

const hasValue = (value: unknown, focused: boolean): boolean => {

	return value !== undefined && value !== null && value !== '' || focused;
};

const Field: FC<Props> = ({label, name, type, autocomplete, value, setValue}: Props): ReactElement => {

	const [focused, setFocused] = useState(false);
	const [touched, setTouched] = useState(false);
	const [errorText, setErrorText] = useState('');

	useEffect(() => {
		touched && !focused && validaion(type, value, setErrorText);
	}, [touched, focused]);

	const handleFocus = useCallback(() => {
		setFocused(true);
		setTouched(true)
	}, []);

	const handleBlurComp = useCallback(() => {
		setFocused(false);
	}, []);

	const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		const valueWithoutSpaces = e.target.value.replace(/\s+/g, '');
		setValue(valueWithoutSpaces);
		setErrorText('');
	}, []);

	const hasVal = hasValue(value, focused);

	const labelCls = cn(styles.label, {
		[styles.label_active]: hasVal
	});

	return (
		<div className={styles.field} onFocus={handleFocus} onBlur={handleBlurComp}>
			<label className={labelCls} htmlFor={name}>{label}</label>
			<input id={name} className={styles.input} onChange={handleChange} value={value} type={type} autoComplete={autocomplete}/>
			<div className={cn(styles.errorText, {[styles.errorText_active]: errorText})}><div>{errorText}</div></div>
		</div>
	)
}

export default Field;
