import React, {useState} from 'react';

const Categories = () => {

    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    const onCategoryChanged = (index) => {
            setActiveCategoryIndex(index);
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