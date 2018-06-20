import React from 'react'
import Pitch from './landingPage/pitch';
import Pricing from './landingPage/pricing';

export default class LandingPage extends React.Component {
  render () {
    return (
      <div>
        <Pitch {...this.props} />
        <Pricing {...this.props} />
      </div>
    )
  }
}
