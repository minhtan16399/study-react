//rcc
import React, { Component } from 'react'
//import css dạng module chỉ tác động đến component import và sử dụng
import style from './StyleComponent.module.scss'
export default class StyleComponent extends Component {
  render() {
    let fz = '20px';
    let classNameCss = 'text-green';
    let obStyle = {
        fontSize:fz,
        color:'white',
        backgroundColor: 'red',
        padding:'15px'
    }
    return (
      <div className='container'>
        <p className={`bg-danger ${style[classNameCss]}`}>Lorem ipsum dolor sit amet.</p>
        <div style={{
        fontSize:'20px',
        color:'white',
        backgroundColor: 'red',
        padding:'15px'
    }}>
                abc
        </div>
        <div style={obStyle}>
                abc
        </div>


      </div>
    )
  }
}
