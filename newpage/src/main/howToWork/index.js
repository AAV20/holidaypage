import React, { Component } from 'react'
import { GiftParent, SectionGift } from '../../MainTags'
import HowToWorkimg from './HowToWorkimg';
import HowToWorkText from './HowToWorkText';

export default class HowToWork extends Component {
  render() {
    return (
      <SectionGift>
          <GiftParent>
          <HowToWorkimg/>
          <HowToWorkText/>
          </GiftParent>
      </SectionGift>
    )
  }
}
