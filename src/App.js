import React, {createContext, useState} from 'react';
import {
    Routes,
    Route,
} from 'react-router-dom';

import './scss/app.scss';
import Header from './modules/header/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

//https://62a8517e943591102b9ef016.mockapi.io/pizzas

export const AppContext = createContext(null)

function App() {
    const [searchValue, setSearchValue] = useState('');

    return (
        <div className="wrapper">
            <AppContext.Provider value={{searchValue, setSearchValue}}>
                <Header/>
                <div className="content">
                    <div className="container">
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/cart" element={<Cart/>}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Routes>
                    </div>
                </div>
            </AppContext.Provider>
        </div>
    );
}

export default App;
