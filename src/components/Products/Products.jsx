import React, { Component } from 'react';
import './Products.css';

const products = [
    {
        name: 'Horrible Baby',
        image: 'https://images-na.ssl-images-amazon.com/images/I/61ZyZXZ2WbL._AC_SX522_.jpg',
        price: 40
    },
    {
        name: 'Michael Myers',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71g0RU24BNL._AC_SL1500_.jpg',
        price: 25
    }
];

class Products extends Component {

    state = {
        cart: []
    }

    add = (product) => {
        this.setState(state => ({cart: [...state.cart, product]}))
    }

    remove = (product) => {
        this.setState(state => {
            const cart = [...state.cart];
            const productIndex = cart.findIndex(p => p.name === product.name);
            if(productIndex < 0) {
                return;
            }
            cart.splice(productIndex, 1)
            return ({
                cart
            })
        })
    }

    total = () => {
        const total = this.state.cart.reduce((totalPrice, product) => totalPrice + product.price, 0);
        return total;
    }


    
    render() {
        return(
            <div className="container">
                <div>Mon panier : {this.state.cart.length} produits !</div>
                <div>Total : {this.total()}€</div>
                <div>
                    {products.map(product => (
                        <div key={product.name}>
                            <div className="product">
                                <img src={product.image} alt={product.name} />
                                <span>{product.name}</span>         
                                <span>{product.price}</span>
                            </div>
                            <button onClick={() => this.add(product)}>Add</button>
                            <button onClick={() => this.remove(product)}>Remove</button>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
};

export default Products;