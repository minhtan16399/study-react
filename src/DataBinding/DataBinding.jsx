import React, { Component } from 'react'

export default class Databinding extends Component {
  prod = {
    id:1,
    name:'iphone'
  }
  renderTitle = () =>{

        let kq = 'XYZ';
        return <div>
            {kq} - {this.prod.name}
        </div> //Có thể return về string,number, null, boolean hoặc jsx (Không thể binding object )
  }
  render() {
    let title = "Cybersoft";
    let person = {
        id:1,
        name:'Hoàng',
        img:'https://i.pravatar.cc?u=2',
        age:30
    }
    return (
      <div className='container'>
        <h3>Databinding</h3>
        <h3>product name: {this.prod.name} </h3>
        <p>{this.renderTitle()}</p>
        <p id="txt">{title}</p>
        <div className="card w-25">
            <img className="card-img-top" src={person.img} alt="Title" />
            <div className="card-body">
                <h4 className="card-title">Name: {person.name}</h4>
                <p className="card-text">Age: {person.age}</p>
                <button className='btn btn-danger'>Add friend</button>
            </div>
        </div>
      </div>
    )
  }
}
