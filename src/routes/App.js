import React from 'react';
import './app.scss';

import NavBarContainer from '../views/navBar/navBarContainer';
import ElementsContainer from '../views/listElementsContainer/ElementsContainer';
import CartContainer from '../views/cartContainer/CartContainer';
import ElementByIdContainer from '../views/elementByIdContainer/ElementByIdContainer';
import Checkout from '../views/checkout/Checkout';
import DashBoardContainer from '../views/dashboard/DashBoardContainer';
import Footer from '../views/footer/Footer';

import Notification from '../components/notification/Notification';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { NotificationContext } from '../context/NotificationContext';
import { UserContext } from '../context/UserContext';

function App() {
    return (
        <div className="routes">
            <UserContext>
                <NotificationContext>
                    <CartContext>
                        <BrowserRouter>
                            <NavBarContainer />
                            <Notification />
                                <Routes>
                                    <Route path="/Curso-React/" element={<ElementsContainer />} />
                                    <Route path="/Curso-React/element/:id" element={<ElementByIdContainer />} />
                                    <Route path="/Curso-React/:category" element={<ElementsContainer />} />
                                    <Route path="/Curso-React/cart" element={<CartContainer />} />
                                    <Route path="/Curso-React/checkout" element={<Checkout />} />
                                    <Route path="/Curso-React/dashboard" element={<DashBoardContainer />} />
                                </Routes>
                            <Footer />
                        </BrowserRouter>
                    </CartContext>
                </NotificationContext>
            </UserContext>
        </div>
    );
}

export default App;