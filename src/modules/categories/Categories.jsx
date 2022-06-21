import React from 'react';

const Categories = ({activeCategoryIndex, onCategoryClick}) => {

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    const onCategoryChanged = (index) => {
        onCategoryClick(index);
    }

    return (
        <div className="categories">
            <ul>
                {
                    categories
                        .map((item, index) => (
                            <li
                                onClick={() => onCategoryChanged(index)}
                                className={activeCategoryIndex === index ? 'active' : ''}
                                key={index}>
                                {item}
                            </li>
                        ))
                }
            </ul>
        </div>
    )
}

export default Categories;