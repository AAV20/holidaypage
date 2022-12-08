import React, { Component } from 'react'
import CopyRight from './CopyRight';
import FooterNav from './FooterNav'
import IconsSocialMedia from './IconsSocialMedia';

export default class Footer extends Component {
  render() {
    return (
      <footer>
          <FooterNav/>
          <hr/>
          <IconsSocialMedia/>
          <CopyRight/>
      </footer>
    )
  }
}
