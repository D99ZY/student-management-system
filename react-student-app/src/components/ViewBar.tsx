import Sort from './Sort';
import Filter from './Filter';
import Search from './Search';
import styles from './ViewBar.module.css';

const ViewBar = () => {
    return (
        <div className={styles.container}>
            <Sort />
            <Filter />
            <Search />
        </div>
    );
};

export default ViewBar;
