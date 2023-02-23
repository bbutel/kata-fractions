import {raiseExceptionIfFractionNotOk} from './checkFraction'
import {displayFraction} from './displayFraction'
import {simplyFraction} from './simplyFraction'
import {Fraction} from './types'

export const sum = (fraction1: Fraction, fraction2: Fraction): string => {
  raiseExceptionIfFractionNotOk(fraction1)
  raiseExceptionIfFractionNotOk(fraction2)
  const dividend1 = fraction1.dividend * fraction2.divider
  const dividend2 = fraction2.dividend * fraction1.divider
  const tempComputedFraction: Fraction = {
    dividend: dividend1 + dividend2,
    divider: fraction1.divider * fraction2.divider,
  }
  const simplifiedComputedFraction = simplyFraction(tempComputedFraction)
  return displayFraction(simplifiedComputedFraction)
}
