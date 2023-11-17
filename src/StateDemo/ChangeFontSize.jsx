import React, { Component } from 'react'

export default class ChangeFontSize extends Component {
    //State: là thuộc tính có sẵn của class Component, dùng để quản lý giá trị thay đổi của component
    state = {
        fSize:16
    }

  render() {
    return (
      <div className="container">
         <p style={{fontSize:this.state.fSize}}>Lorem ipsum dolor sit amet.</p>
         <button className='btn btn-primary' onClick={()=>{
            //this.setState là 1 hàm có sẵn của react Class component nhận vào state với giá trị mới và gọi hàm render lại giao diện
            let newState = {
                fSize:this.state.fSize + 10
            }
            this.setState(newState)
            // this.state.fSize += 5;
            // this.render()
         }}>+</button>
      </div>
    )
  }
}
