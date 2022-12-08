import React, { Component } from 'react'
import data from './footerData.json'
import {FooterParent} from '../MainTags.js'

export default class FooterNav extends Component {
  render() {
    return (
      <nav>
        <FooterParent>
          {data.map(item=>(item?.img ? <img src={item.img} alt="" key={item.id}/> : <li key={item.id}>{item.name}</li> ))}
        </FooterParent>  
      </nav>
    )
  }
}
