import styles from './StudentTile.module.css';

interface StudentInfo {
    firstName: string;
    lastName: string;
    schoolYear: string;
    gender: string;
    dob: string;
}

const StudentTile = (props: StudentInfo) => {
    return (
        <div className={styles.container}>
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
