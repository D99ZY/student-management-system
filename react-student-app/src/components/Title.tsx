import styles from './Title.module.css';

interface TitleProps {
    title: string;
}

const Title = ({title}: TitleProps) => {
    return (
        <h1 className={styles.container}>
            {title}
        </h1>
    );
};

export default Title;
