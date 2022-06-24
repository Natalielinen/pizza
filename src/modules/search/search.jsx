import React from 'react';
import styles from './Search.module.scss';

const Search = ({setSearchValue, searchValue}) => {
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