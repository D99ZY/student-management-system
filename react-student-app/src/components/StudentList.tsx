import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import StudentTile from './StudentTile';
import student_data from '../student_records.json';
import styles from './StudentList.module.css';


const StudentList = () => {

    // Context
    const {
        state: { options }
    } = useContext(GlobalContext);

    // Display students function
    const displayStudents = (sort: number, filter: number, search: string) => {

        // Local variables
        let studentArray = student_data.Students;
        let sortedArray, filteredArray, searchedArray;

        // Sort
        if (sort === 0) {
            sortedArray = studentArray.sort((a, b) => a.first_name.localeCompare(b.first_name));
        }
        else {
            sortedArray = studentArray.sort((a, b) => a.last_name.localeCompare(b.last_name));
        }

        // Filter
        if (filter > 0) {
            filteredArray = sortedArray
                .filter(({ year_code }) => {
                    return parseInt(year_code) === filter;
                });
        }
        else {
            filteredArray = studentArray;
        }

        // Search
        if (search !== '') {
            searchedArray = filteredArray
                .filter(({ first_name, last_name }) => {
                    return (first_name.toLowerCase().includes(search.toLowerCase()) || 
                        last_name.toLowerCase().includes(search.toLowerCase()));
                });
        }
        else {
            searchedArray = filteredArray;
        }

        // Return
        if (searchedArray.length > 0) {
            return searchedArray.map((student) => (
            
                <StudentTile
                    key={student.source_id}
                    firstName={student.first_name}
                    lastName={student.last_name}
                    schoolYear={student.year_code}
                    gender={student.gender}
                    dob={student.dob.split(" ")[0]}
                />
            ));
        }
        else {
            return <h2 className={styles.none}>No students found...</h2>;
        }
    };

    // JSX
    return (
        <div className={styles.container}>

            {displayStudents(options.sort, options.filter, options.search)}

        </div>
    );
};

export default StudentList;
