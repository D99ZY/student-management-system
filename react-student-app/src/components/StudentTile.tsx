import { useContext } from 'react';
import { updateStudent } from '../context/actions';
import { GlobalContext } from '../context/GlobalState';
import student_data from '../student_records.json';
import styles from './StudentTile.module.css';

interface StudentInfo {
    sourceID: string;
    firstName: string;
    lastName: string;
    schoolYear: string;
    gender: string;
    dob: string;
}

const StudentTile = (props: StudentInfo) => {

    // Context
    const {
        state: { student }, dispatch
    } = useContext(GlobalContext);

    // Get student details based on student source id
    const getStudentDetails = (id: string) => {
        const studentDetails = student_data.Students.filter(element => element.source_id === id);
        return studentDetails[0];
    };

    // Update student in global state
    const updateStudentObject = (id: string) => {
        let newStudent = student;
        let newStudentDetails = getStudentDetails(id);

        newStudent.displayStudent = true;
        newStudent.sourceID = newStudentDetails.source_id;
        newStudent.firstName = newStudentDetails.first_name;
        newStudent.lastName = newStudentDetails.last_name;
        newStudent.gender = newStudentDetails.gender;
        newStudent.yearCode = newStudentDetails.year_code;
        newStudent.dob = newStudentDetails.dob;
        newStudent.ethnicityCode = newStudentDetails.ethnicity_code;
        newStudent.addressLine1 = newStudentDetails.address_line_1;
        newStudent.addressLine2 = newStudentDetails.address_line_2;
        newStudent.townCity = newStudentDetails.town_city;
        newStudent.postcode = newStudentDetails.postcode;
        newStudent.contacts[0].name = newStudentDetails.contacts[0].name;
        newStudent.contacts[0].relationship = newStudentDetails.contacts[0].relationship;
        newStudent.contacts[1].name = newStudentDetails.contacts[1].name;
        newStudent.contacts[1].relationship = newStudentDetails.contacts[1].relationship;

        dispatch(updateStudent(newStudent));
    }

    // Update student in global state on tile click
    const onClickHandler = () => {
        updateStudentObject(props.sourceID);
    };

    // JSX
    return (
        <div className={styles.container} onClick={onClickHandler}>
            <h2>{`${props.firstName} ${props.lastName}`}</h2>
            <h3>{`Year: ${props.schoolYear}`}</h3>
            <div className={styles.bottom}>
                <h4>{`Gender: ${props.gender}`}</h4>
                <h4>{`DOB: ${props.dob}`}</h4>
            </div>
        </div>
    );
};

export default StudentTile;
