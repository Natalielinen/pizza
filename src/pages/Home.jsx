import Categories from '../modules/categories/Categories';
import Sort from '../modules/sort/Sort';
import Skeleton from '../modules/pizzaBlock/Skeleton';
import PizzaBlock from '../modules/pizzaBlock/PizzaBlock';
import React, {useEffect, useState} from 'react';


const Home = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
    const [sortType, setActiveSortType] = useState({name: 'популярности', sort: 'rating'})


    useEffect(() => {

        const sortBy = sortType.sort.replace('-', '')
        const sortOrder = sortType.sort.includes('-') ? 'asc' : 'desc'
        fetch(`https://62a8517e943591102b9ef016.mockapi.io/pizzas?${activeCategoryIndex > 0 ? `category=${activeCategoryIndex}` : ''}&sortBy=${sortBy}&order=${sortOrder}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
                setIsLoading(false)
            })
        window.scrollTo(0, 0);
    }, [activeCategoryIndex, sortType])
    return (
        <>
            <div className="content__top">
                <Categories activeCategoryIndex={activeCategoryIndex}
                            onCategoryClick={(i) => setActiveCategoryIndex(i)}/>
                <Sort value={sortType} onSortChange={(i) => setActiveSortType(i)}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
                        : data.map(obj => <PizzaBlock {...obj} key={obj.id}/>)
                }
            </div>
        </>
    )
}

export default Home;