import {ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactElement, ReactNode} from 'react';

import styles from './index.css';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children: ReactNode;
	disabled: boolean;
}

const Button: FC<Props> = ({children, disabled}: Props): ReactElement => {
	return (
		<button className={styles.button} type='submit' disabled={disabled}>{children}</button>
	)
}

export default Button;
