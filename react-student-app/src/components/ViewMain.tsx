import StudentList from './StudentList';
import styles from './ViewMain.module.css';

const ViewMain = () => {
    return (
        <div className={styles.container}>
            <StudentList />
        </div>
    );
};

export default ViewMain;
