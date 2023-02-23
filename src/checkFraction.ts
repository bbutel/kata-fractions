import {displayFraction} from './displayFraction'
import {Fraction} from './types'

const checkFraction = (fraction: Fraction): boolean => {
  return !(fraction.divider === 0)
}

export const raiseExceptionIfFractionNotOk = (fraction: Fraction) => {
  if (!checkFraction(fraction))
    throw new Error(`Bad fraction divider. 0 is not accepted: ${displayFraction(fraction)}`)
}
