import React, {useEffect, useState} from 'react';
import './scss/app.scss';
import Header from './modules/header/Header';
import Categories from './modules/categories/Categories';
import Sort from './modules/sort/Sort';
import PizzaBlock from './modules/pizzaBlock/PizzaBlock';
import Skeleton from './modules/pizzaBlock/Skeleton';

//https://62a8517e943591102b9ef016.mockapi.io/pizzas

function App() {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://62a8517e943591102b9ef016.mockapi.io/pizzas')
            .then(res => res.json())
            .then(data => {
                setData(data)
                setIsLoading(false)
            })
    }, [])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories/>
                        <Sort/>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        {
                            isLoading ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
                                : data.map(obj => <PizzaBlock {...obj} key={obj.id}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
