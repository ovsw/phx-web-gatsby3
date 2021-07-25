import React from 'react'
// import HamburgerIcon from './hamburger'
import ConventionalLoan from './conventional-loan'
import AdjustableRateMortgage from './adjustable-rate-mortgage'
import FhaLoan from './fha-loan'
import UsdaLoan from './usda-loan'
import AmericanFlag from './american-flag'
import Elephant from './elephant'

function Icon (props) {
  switch (props.symbol) {
    case 'conventional-loan':
      return <ConventionalLoan />
    case 'adjustable-rate-mortgage':
      return <AdjustableRateMortgage />
    case 'fha-loan':
      return <FhaLoan />
    case 'usda-loan':
      return <UsdaLoan />
    case 'american-flag':
      return <AmericanFlag />
    case 'elephant':
      return <Elephant />
    default:
      return <span>Unknown icon: {props.symbol}</span>
  }
}

export default Icon
