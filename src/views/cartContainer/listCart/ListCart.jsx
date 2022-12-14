import React, { useContext } from 'react';
import CartContext from '../../../context/CartContext';

import ElementCart from '../elementCart/ElementCart';
import ButtonRedirect from '../../../components/buttonsGlobals/buttonRedirect/ButtonRedirect';
import './listCart.scss'

const ListCart = ({ items }) => {
    const { getTotal, clearItems } = useContext(CartContext);

    return (
        <div className='lista-de-productos-container'>
            <h2 className='title'>Carrito</h2>
        
            <table className='table'>
                
                <thead>
                    <tr className='head-table'>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody className='body-table'>
                    {items.map((item) => {
                        return <ElementCart item={item} key={item.element.id} />;
                    })}
                </tbody>
                
                <tfoot className='footer-table'>
                    <tr>
                        <td colSpan="2">Total:</td>
                        <td>${getTotal()}</td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
            
            <div className='buttons-cart'>
                <button className='button-eliminar-todo' onClick={clearItems}>Eliminar todos los items</button>
                <ButtonRedirect text="Finalizar compra" toLink="/Curso-React/checkout" />
            </div>
        </div>
    );
};

export default ListCart;