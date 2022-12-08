import React, { Component } from 'react'
import { GiftParent, SectionGift } from '../../MainTags'
import FindGiftImg from './FindGiftImg';
import FindGiftText from './FindGiftText';

export default class FindGift extends Component {
  render() {
    return (
      <SectionGift>
          <GiftParent>
          <FindGiftText/>
          <FindGiftImg/>
          </GiftParent>
      </SectionGift>
    )
  }
}
