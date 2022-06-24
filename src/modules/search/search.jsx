import React, {useContext} from 'react';
import styles from './Search.module.scss';
import {AppContext} from '../../App';

const Search = () => {
    const {searchValue, setSearchValue} = useContext(AppContext)
    
    return (
        <div className={styles.searchContainer}>
            <input
                className={styles.input}
                type="text"
                placeholder="поиск..."
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
            />
        </div>
    )
}

export default Search;