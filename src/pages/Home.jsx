import Categories from '../modules/categories/Categories';
import Sort from '../modules/sort/Sort';
import Skeleton from '../modules/pizzaBlock/Skeleton';
import PizzaBlock from '../modules/pizzaBlock/PizzaBlock';
import React, {useEffect, useState} from 'react';


const Home = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
    const [activeSortIndex, setActiveSortIndex] = useState(0)
    const [showSortPopup, setShowSortPopup] = useState(false)

    const onSortItemChange = (index) => {
        setActiveSortIndex(index)
        setShowSortPopup(false)
        fetch(`https://62a8517e943591102b9ef016.mockapi.io/pizzas?sort=${index}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
                setIsLoading(false)
            })

    }

    const onCategoryChanged = (index) => {
        setActiveCategoryIndex(index);
        fetch(`https://62a8517e943591102b9ef016.mockapi.io/pizzas?category=${index}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
                setIsLoading(false)
            })
    }

    useEffect(() => {
        fetch('https://62a8517e943591102b9ef016.mockapi.io/pizzas')
            .then(res => res.json())
            .then(data => {
                setData(data)
                setIsLoading(false)
            })
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className="content__top">
                <Categories activeCategoryIndex={activeCategoryIndex}
                            onCategoryChanged={onCategoryChanged}/>
                <Sort activeSortIndex={activeSortIndex} onSortItemChange={onSortItemChange}
                      showSortPopup={showSortPopup} setShowSortPopup={setShowSortPopup}/>
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