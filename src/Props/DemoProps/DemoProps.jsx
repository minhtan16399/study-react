import React, { Component } from 'react'
import Card from './Card'
import ProductCom from './ProductCom'

export default class DemoProps extends Component {
  render() {
    const person = {
        id:1,
        name:'Hằng',
        age:19,
        image:'https://i.pravatar.cc?u=40'
    }

    return (
      <div className='container'>
        <div className='d-flex'>
        <div className="w-25">
            <Card name="Tèo" age={20} image={'https://i.pravatar.cc?u=10'}/>
        </div>
        <div className="w-25">
            <Card name="Hoàng" age={30} image={'https://i.pravatar.cc?u=30'} />
        </div>
        <div className="w-25">
            <Card name="An" age={40} image={'https://i.pravatar.cc?u=40'}/>
        </div>
        </div>
        <div className='row mt-2'>
            <div className='col-md-4'>
                <ProductCom data={person} desc={<p className="text-danger">Lorem ipsum dolor sit amet.</p>}/>
            </div>
        </div>
      </div>
    )
  }
}
