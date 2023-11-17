import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    let {product} = this.props;
    return (
      <div className='card'>
        <img src={product?.image} alt="..." />
        <div className='card-body'>
            <h5>{product?.name}</h5>
            <p>{product?.price}</p>
            <button className='btn btn-dark'>
                Add to cart <i className='fa fa-cart-plus'></i>
            </button>
        </div>
      </div>
    )
  }
}
