import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import ViewBar from './ViewBar';
import StudentList from './StudentList';
import StudentCard from './StudentCard';
import styles from './ViewMain.module.css';

const ViewMain = () => {

    // Context
    const {
        state: { student }
    } = useContext(GlobalContext);


    return (
        <div className={styles.container}>
            {student.displayStudent ? 
                <div>
                    <StudentCard />
                </div>
                : 
                <div>
                    <ViewBar />
                    <StudentList />
                </div>
            }
        </div>
    );
};

export default ViewMain;
