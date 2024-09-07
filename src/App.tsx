import {FC, ReactElement} from 'react';
import Login from './components/Login';

import styles from './app.css';

const App: FC = (): ReactElement => {
	return (
		<div className={styles.app}>
			<Login />
		</div>
	);
}

export default App;
