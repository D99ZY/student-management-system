import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { updateOptions } from '../context/actions';
import styles from './Sort.module.css';

const Sort = () => {

    // Context
    const {
        state: { options }, dispatch
    } = useContext(GlobalContext);

    // State
    const [sortState, setSortState] = useState<number>(0);

    // Set sortState on input change
    const handleOnChange = (e: React.FormEvent<HTMLSelectElement>): void => {
        const { selectedIndex } = e.currentTarget;
        setSortState(selectedIndex);
    }
    
    // Update context on sortState change
    useEffect(() => {
        let newOptions = options;
        newOptions.sort = sortState;
        dispatch(updateOptions(newOptions));
    }, [dispatch, sortState, options]);

    // JSX
    return (
        <div className={styles.container}>
            <form className={styles.inputForm}>
                <label>Sort By </label>
                <select value={sortState} onChange={handleOnChange}>
                    <option value={0}>First Name</option>
                    <option value={1}>Last Name</option>
                </select>
            </form>
        </div>
    );
};

export default Sort;
