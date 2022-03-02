import StudentTile from './StudentTile';
import student_data from '../student_records.json';
import styles from './StudentList.module.css';


const StudentList = () => {

    const displayStudents = () => {
        return student_data.Students.map((student) => (
            <StudentTile
                key={student.source_id}
                firstName={student.first_name}
                lastName={student.last_name}
                schoolYear={student.year_code}
                gender={student.gender}
                dob={student.dob.split(" ")[0]}
            />
        ));
    };

    return (
        <div className={styles.container}>
            <h3>StudentList</h3>

            {displayStudents()}
            
        </div>
    );
};

export default StudentList;
