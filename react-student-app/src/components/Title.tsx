import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import styles from './Title.module.css';

interface TitleProps {
    title: string;
}

const Title = ({title}: TitleProps) => {

    // Context
    const {
        state: { student }
    } = useContext(GlobalContext);

    // JSX
    return (
        <h1 className={styles.container}>
            {student.displayStudent ? `${student.firstName} ${student.lastName}` : title}
        </h1>
    );
};

export default Title;
