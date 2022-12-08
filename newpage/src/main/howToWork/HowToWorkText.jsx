import React, { Component } from 'react'
import { LearnMoreBtn, TextBlock, TextBlockP } from '../../MainTags'

export default class HowToWorkText extends Component {
  render() {
    return (
      <TextBlock>
          <h2>How we work</h2>
          <TextBlockP>We’ve actually already asked hundreds of women what they want, and made a database with the results. All you have to do is take our short survey that only takes seconds, and our proprietary algorithm will match you with a few perfect gift options.</TextBlockP>
        <LearnMoreBtn>Leanr more</LearnMoreBtn>
      </TextBlock>
    )
  }
}
