import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { updateOptions } from '../context/actions';
import styles from './Filter.module.css';

const Filter = () => {

    type Choice = {
        label: string;
        value: number;
    }

    // Array of form select options
    const choiceList: Choice[] = [
        {
            label: 'All',
            value: 0,
        },
        {
            label: 'Year 1',
            value: 1,
        },
        {
            label: 'Year 2',
            value: 2,
        },
        {
            label: 'Year 3',
            value: 3,
        },
        {
            label: 'Year 4',
            value: 4,
        },
        {
            label: 'Year 5',
            value: 5,
        },
        {
            label: 'Year 6',
            value: 6,
        },
        {
            label: 'Year 7',
            value: 7,
        },
        {
            label: 'Year 8',
            value: 8,
        },
        {
            label: 'Year 9',
            value: 9,
        },
        {
            label: 'Year 10',
            value: 10,
        },
        {
            label: 'Year 11',
            value: 11,
        },
        {
            label: 'Year 12',
            value: 12,
        },
    ];

    // Context
    const {
        state: { options }, dispatch
    } = useContext(GlobalContext);

    // State
    const [filterState, setFilterState] = useState<number>(0);

    // Set filterState on input change
    const handleOnChange = (e: React.FormEvent<HTMLSelectElement>): void => {
        const { selectedIndex } = e.currentTarget;
        setFilterState(selectedIndex);
    }

    // Update context on filterState change
    useEffect(() => {
        let newOptions = options;
        newOptions.filter = filterState;
        dispatch(updateOptions(newOptions));
    }, [dispatch, filterState, options]);

    // JSX
    return (
        <div className={styles.container}>
            <form className={styles.inputForm}>
                <label>Year Group </label>
                <select value={filterState} onChange={handleOnChange}>
                    {choiceList.map((choice) => (
                        <option key={choice.value} value={choice.value}>{choice.label}</option>
                    ))}
                </select>
            </form>
        </div>
    );
};

export default Filter;
