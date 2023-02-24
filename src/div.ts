import {raiseExceptionIfFractionNotOk} from './checkFraction'
import {prod} from './prod'
import {Fraction} from './types'

export const div = (fraction1: Fraction, fraction2: Fraction): string => {
  raiseExceptionIfFractionNotOk(fraction1)
  raiseExceptionIfFractionNotOk(fraction2)
  const inverseFraction2: Fraction = {
    dividend: fraction2.divider,
    divider: fraction2.dividend,
  }
  return prod(fraction1, inverseFraction2)
}
