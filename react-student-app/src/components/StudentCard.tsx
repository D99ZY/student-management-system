import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import styles from './StudentCard.module.css';

const StudentCard = () => {

    // Context
    const {
        state: { student }
    } = useContext(GlobalContext);

    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <h3>Student Details</h3>
                <h4>{`Name: ${student.firstName} ${student.lastName}`}</h4>
                <h4>{`Year Code: ${student.yearCode}`}</h4>
                <h4>{`Gender: ${student.gender}`}</h4>
                <h4>{`DOB: ${student.dob.split(" ")[0]}`}</h4>
                <h4>{`Ethnicity Code: ${student.ethnicityCode}`}</h4>
            </div>
            <div className={styles.section}>
                <h3>Address</h3>
                <h4>{`Line 1: ${student.addressLine1}`}</h4>
                <h4>{`Line 2: ${student.addressLine2}`}</h4>
                <h4>{`Town: ${student.townCity}`}</h4>
                <h4>{`Postcode: ${student.postcode}`}</h4>
            </div>
            <div className={styles.section}>
                <h3>Emergency Contacts</h3>
                <h4>{`Name: ${student.contacts[0].name}`}</h4>
                <h4>{`Relationship: ${student.contacts[0].relationship}`}</h4>
                <br />
                <h4>{`Name: ${student.contacts[1].name}`}</h4>
                <h4>{`Relationship: ${student.contacts[1].relationship}`}</h4>
            </div>
        </div>
    );
};

export default StudentCard;
