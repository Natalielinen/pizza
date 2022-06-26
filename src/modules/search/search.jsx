import React from 'react';
import styles from './Search.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {setSearchValue} from '../../redux/slices/filterSlice';

const Search = () => {
    const searchValue = useSelector((state) => state.filter.searchValue)
    const dispatch = useDispatch()

    return (
        <div className={styles.searchContainer}>
            <input
                className={styles.input}
                type="text"
                placeholder="поиск..."
                value={searchValue}
                onChange={e => dispatch(setSearchValue(e.target.value))}
            />
        </div>
    )
}

export default Search;