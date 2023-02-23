import {Fraction} from './types'

export const displayFraction = (fraction: Fraction): string => {
  let result = `${fraction.dividend}`
  if (fraction.divider !== 1) result += `/${fraction.divider}`
  return result
}
