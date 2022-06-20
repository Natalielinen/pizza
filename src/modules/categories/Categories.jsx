import React from 'react';

const Categories = ({activeCategoryIndex, onCategoryChanged}) => {

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];


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