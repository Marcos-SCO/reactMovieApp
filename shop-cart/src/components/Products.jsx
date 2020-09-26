import React, { Component } from 'react'
import formatCurrency from '../utils';

export default class Products extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                    {this.props.products.map(product => (
                        <li key={product._id}>
                            <div className="product">
                                <a href={`#${product._id}`}>
                                    <img src={product.img} alt={product.title} />
                                    <p>{product.title}</p>
                                </a>
                                <div className="product-price">
                                    <div>{formatCurrency(product.price)}</div>
                                    <button className="button primary"
                                    onClick={() => this.props.addToCart(product)}
                                    >Adicionar ao carrinho</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}