import styles from './StudentTile.module.css';

interface StudentInfo {
    firstName: string;
    lastName: string;
    schoolYear: string;
}

const StudentTile = (props: StudentInfo) => {
    return (
        <div className={styles.container}>
            <h2>{`${props.firstName} ${props.lastName}`}</h2>
            <h3>{`Year: ${props.schoolYear}`}</h3>
        </div>
    );
};

export default StudentTile;
