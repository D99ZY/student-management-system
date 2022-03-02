import StudentList from './StudentList';
import styles from './ViewMain.module.css';

const ViewMain = () => {
    return (
        <div className={styles.container}>
            <h2>ViewMain</h2>
            <StudentList />
        </div>
    );
};

export default ViewMain;
