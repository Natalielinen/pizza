import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Categories from '../modules/categories/Categories';
import Sort from '../modules/sort/Sort';
import Skeleton from '../modules/pizzaBlock/Skeleton';
import PizzaBlock from '../modules/pizzaBlock/PizzaBlock';
import {setActiveCategoryIndex} from '../redux/slices/filterSlice';
import axios from 'axios';


const Home = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const {activeCategoryIndex, sort, searchValue} = useSelector((state) => state.filter)
    const dispatch = useDispatch();

    useEffect(() => {
        const sortBy = sort.property.replace('-', '')
        const sortOrder = sort.property.includes('-') ? 'asc' : 'desc'
        axios.get(`https://62a8517e943591102b9ef016.mockapi.io/pizzas?${activeCategoryIndex > 0 ? `category=${activeCategoryIndex}` : ''}&sortBy=${sortBy}&order=${sortOrder}`)
            .then(res => {
                setData(res.data)
                setIsLoading(false)
            })
        window.scrollTo(0, 0);
    }, [activeCategoryIndex, sort])

    const pizzas = data.filter(obj => obj.title.toLowerCase().includes(searchValue.toLowerCase())).map(obj =>
        <PizzaBlock {...obj} key={obj.id}/>)

    return (
        <>
            <div className="content__top">
                <Categories activeCategoryIndex={activeCategoryIndex}
                            onCategoryClick={(i) => dispatch(setActiveCategoryIndex(i))}/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
                        : pizzas
                }
            </div>
        </>
    )
}

export default Home;