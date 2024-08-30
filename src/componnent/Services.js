import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail , FaHiking,FaShuttleVan,FaBeer}from 'react-icons/fa'
export default class Services extends Component {
  state={
    services:[
        {
            icon:<FaCocktail/>,
            title:"free cocktails",
            info:"lorem ipsum  color sit amet consecteur adipising elit mangi cortis!"
        },
        {
            icon:<FaHiking/>,
            title:"endless hiking",
            info:"lorem ipsum  color sit amet consecteur adipising elit mangi cortis!"
        },
        {
            icon:<FaShuttleVan/>,
            title:"free shuttle",
            info:"lorem ipsum  color sit amet consecteur adipising elit mangi cortis!"
        },
        {
            icon:<FaBeer/>,
            title:"strongest beer",
            info:"lorem ipsum  color sit amet consecteur adipising elit mangi cortis!"
        }
    ]
  }
 render() {
    return (
      <section className='services'>
        <Title title='services'/>
        <div className='services-center'>
            {this.state.services.map((item,index)=>{
            return <article key={index} className='service'>
                       <span>{item.icon}</span>
                       <h6>{item.title}</h6>
                       <p>{item.info}</p>
                    </article>
            })}
        </div>
      </section>
    )
  }
}


