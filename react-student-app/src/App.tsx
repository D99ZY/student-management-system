import { GlobalProvider } from './context/GlobalState';
import Title from './components/Title';
import ViewMain from './components/ViewMain';
import styles from './App.module.css';
import './globals.css';

function App() {
    return (
        <GlobalProvider>
            <div className={styles.app}>
                <div className={styles.titleContainer}>
                    <Title title='My Students' />
                </div>
                <div className={styles.appContainer}>
                    <ViewMain />
                </div>
            </div>
        </GlobalProvider>
    );
}

export default App;
