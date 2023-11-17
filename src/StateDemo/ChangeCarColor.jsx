import React, { Component } from 'react'

export default class ChangeCarColor extends Component {

    state = {
        imgCar:'./img/CarBasic/products/black-car.jpg'
    }
    changeColor = (color) =>{
        this.setState({
            imgCar:`./img/CarBasic/products/${color}-car.jpg`
        })
    }
  render() {
    return (
      <div className='container'>
        <h3>Change color</h3>
        <div className='row'>
            <div className='col-6'>
                <img className='w-100' src={this.state.imgCar} alt="..." />
            </div>
            <div className='col-6'>
                <button className='btn btn-danger' onClick={()=>{
                    this.changeColor('red')
                }}>Red</button>
                <button className='btn btn-dark mx-2' onClick={()=>{
                    this.changeColor('black')
                }}>Black</button>
                <button className='btn btn-default mx-2' onClick={()=>{
                    this.changeColor('silver')
                }}>Silver</button>
                <button className='btn btn-secondary' onClick={()=>{
                    this.changeColor('steel')
                }}>Steel</button>
            </div>
        </div>
      </div>
    )
  }
}
