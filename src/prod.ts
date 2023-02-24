import {raiseExceptionIfFractionNotOk} from './checkFraction'
import {displayFraction} from './displayFraction'
import {simplyFraction} from './simplyFraction'
import {Fraction} from './types'

export const prod = (fraction1: Fraction, fraction2: Fraction): string => {
  raiseExceptionIfFractionNotOk(fraction1)
  raiseExceptionIfFractionNotOk(fraction2)
  const tempComputedFraction: Fraction = {
    dividend: fraction1.dividend * fraction2.dividend,
    divider: fraction1.divider * fraction2.divider,
  }
  const simplifiedComputedFraction = simplyFraction(tempComputedFraction)
  return displayFraction(simplifiedComputedFraction)
}
