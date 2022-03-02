import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { updateOptions } from '../context/actions';
import styles from './Search.module.css';

const Search = () => {

    // Context
    const {
        state: { options }, dispatch
    } = useContext(GlobalContext);

    // State
    const [searchState, setSearchState] = useState<string>('');

    // Set searchState on input change
    const handleOnChange = (e: React.FormEvent<HTMLInputElement>): void => {
        setSearchState(e.currentTarget.value);
    }

    // Update context on searchState change
    useEffect(() => {
        let newOptions = options;
        newOptions.search = searchState;
        dispatch(updateOptions(newOptions));
    }, [dispatch, searchState, options]);

    // JSX
    return (
        <div className={styles.container}>
            <form className={styles.inputForm}>
                <input 
                    onChange={handleOnChange}
                    placeholder='Search...'
                    type='text'
                    value={searchState}
                />
            </form>
        </div>
    );
};

export default Search;
