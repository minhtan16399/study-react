import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClick = (e) => {
        console.log('clicked')
    }

    sayHello = (name) => {
        alert(name)
    }

    handleSayHello = (name,e) => {
        console.log(name)
        console.log(e)
    }
  render() {
    return (
      <div className="container">
        <button className='btn btn-success' onClick={this.handleClick}>Click me</button>
        <button className='btn btn-success' onClick={(e) => {
                console.log('clicked')
        }}>Click me</button>
         <button className='btn btn-success' onClick={(e) => {
               this.sayHello('Hoàng')
        }}>Click me</button>
        <button className='btn btn-success' onClick={this.handleSayHello.bind(this,'Hoang')}>Say hello</button>

        <input className='w-25 form-control' onInput={(e) => {
            let value = e.target.value;
            e.target.style.color = 'red'
            console.log(value)
        }}/>


      </div>
    )
  }
}



// const eventFunction = () => {

//     return function () {
//         console.log('abc')
//     }
// }

// let hamCallback = eventFunction()
// hamCallback()
// eventFunction()()