import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setActiveSortType} from '../../redux/slices/filterSlice';

const Sort = () => {
    const sort = useSelector(state => state.filter.sort)
    const dispatch = useDispatch();

    const [showSortPopup, setShowSortPopup] = useState(false)
    const sortItems = [
        {name: 'популярности DESC', property: 'rating'},
        {name: 'популярности ASC', property: '-rating'},
        {name: 'цене DESC', property: 'price'},
        {name: 'цене ASC', property: '-price'},
        {name: 'алфавиту DESC', property: 'title'},
        {name: 'алфавиту ASC', property: '-title'}
    ]

    const onSortItemChange = (obj) => {
        dispatch(setActiveSortType(obj))
        setShowSortPopup(false)
    }

    return (
        <div className="sort">
            <div className="sort__label">
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span onClick={() => setShowSortPopup(!showSortPopup)}>{sort.name}</span>
            </div>
            {showSortPopup &&
                <div className="sort__popup">
                    <ul>
                        {
                            sortItems.map((obj, index) => <li
                                key={index}
                                className={sort.property === obj.property ? 'active' : ''}
                                onClick={() => onSortItemChange(obj)}
                            >{obj.name}</li>)
                        }
                    </ul>
                </div>
            }
        </div>
    )
}

export default Sort;