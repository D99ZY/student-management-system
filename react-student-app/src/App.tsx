import Title from './components/Title';
import ViewBar from './components/ViewBar';
import ViewMain from './components/ViewMain';
import styles from './App.module.css';
import './globals.css';

function App() {
    return (
        <div className={styles.app}>

            <div className={styles.titleContainer}>
                <Title title='My Students' />
            </div>

            <div className={styles.appContainer}>
                <ViewBar />
                <ViewMain />
            </div>

        </div>
    );
}

export default App;
