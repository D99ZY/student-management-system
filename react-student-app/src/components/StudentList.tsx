import StudentTile from './StudentTile';
import student_data from '../student_records.json';
import styles from './StudentList.module.css';


const StudentList = () => {
    return (
        <div className={styles.container}>
            <h3>StudentList</h3>

            <StudentTile
                key={student_data.Students[0].source_id}
                firstName={student_data.Students[0].first_name}
                lastName={student_data.Students[0].last_name}
                schoolYear={student_data.Students[0].year_code}
            />
            <StudentTile
                key={student_data.Students[1].source_id}
                firstName={student_data.Students[1].first_name}
                lastName={student_data.Students[1].last_name}
                schoolYear={student_data.Students[1].year_code}
            />
        </div>
    );
};

export default StudentList;
