import {Fraction} from './types'

const pgcd = (a: number, b: number): number => {
  if (b) {
    return pgcd(b, a % b)
  }
  return Math.abs(a)
}

export const simplyFraction = (fraction: Fraction): Fraction => {
  const computedPgcd = pgcd(fraction.dividend, fraction.divider)
  return {
    dividend: fraction.dividend / computedPgcd,
    divider: fraction.divider / computedPgcd,
  }
}
