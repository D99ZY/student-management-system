import StudentTile from './StudentTile';
import styles from './StudentList.module.css';


const StudentList = () => {
    return (
        <div className={styles.container}>
            <h3>StudentList</h3>
            <StudentTile />
        </div>
    );
};

export default StudentList;
