import Title from './components/Title';
import styles from './App.module.css';
import './globals.css';

function App() {
    return (
        <div className={styles.app}>
            <Title title='My Students' />
        </div>
    );
}

export default App;
