import React from 'react';
import './scss/app.scss';
import Header from './modules/header/Header';
import Categories from './modules/categories/Categories';
import Sort from './modules/sort/Sort';
import PizzaBlock from './modules/pizzaBlock/PizzaBlock';

function App() {
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
                        <PizzaBlock
                            imageUrl="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                            price={500}
                            title="Мексиканская"
                        />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
