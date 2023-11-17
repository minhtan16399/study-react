import React, { Component } from 'react'
export default class ChangeAvatar extends Component {
    state = {
        person: {
            age:18,
            img:'https://i.pravatar.cc?u=18'
        }
    }
  render() {
    return (
      <div className='container'>
        <div className='w-25'>
            <div className='card'>
                <img src={this.state.person.img} alt="..." />
                <div className='card-body'>
                    <h3>Age: {this.state.person.age}</h3>
                    <button className='btn btn-danger' onClick={() =>{
                        //Tạo ra object mới
                        let numRandom = Math.floor(Math.random() * 80 + 18);
                        let newPerson = {
                            img:`https://i.pravatar.cc?u=${numRandom}`,
                            age:numRandom
                        }
                        //setState => thay thế object person trong state với giá trị mới
                        this.setState({
                            person:newPerson
                        })
                    }}>Random</button>
                </div>
            </div>
        </div>

      </div>
    )
  }
}
