import {test} from '@jest/globals'

import {fractions} from '../src'
import {Fraction} from '../src/types'

let sut: SUT

beforeEach(() => {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  sut = createSut()
})

describe('Multiplier des fractions', () => {
  describe('Règle: Multiplier deux fractions ayant le même diviseur', () => {
    test('Exemple: 4/7 * 2/7 = 8/49', () => {
      sut.givenFirstFractionIs(4, 7).givenSecondFractionIs(2, 7)

      sut.whenProdBothFractions()

      sut.thenResultIs('8/49')
    })
    test('Exemple: 2/3 * 2/3 = 4/9', () => {
      sut.givenFirstFractionIs(2, 3).givenSecondFractionIs(2, 3)

      sut.whenProdBothFractions()

      sut.thenResultIs('4/9')
    })
  })
  describe('Règle: Multiplier deux fractions ayant un diviseur différent', () => {
    test('Exemple: 1/2 * 1/3 = 1/6', () => {
      sut.givenFirstFractionIs(1, 2).givenSecondFractionIs(1, 3)

      sut.whenProdBothFractions()

      sut.thenResultIs('1/6')
    })
  })
  describe('Règle: le résultat de la multiplication est simpliable', () => {
    test('Exemple: 2/8 * 2/8 = 4/64 = 1/16', () => {
      sut.givenFirstFractionIs(2, 8).givenSecondFractionIs(2, 8)

      sut.whenProdBothFractions()

      sut.thenResultIs('1/16')
    })
    test('Exemple: 10/3 * 9/3 = 90/9 = 10', () => {
      sut.givenFirstFractionIs(10, 3).givenSecondFractionIs(9, 3)

      sut.whenProdBothFractions()

      sut.thenResultIs('10')
    })
    test('Exemple: 3/5 * 2/6 = 6/30 = 1/5', () => {
      sut.givenFirstFractionIs(3, 5).givenSecondFractionIs(2, 6)

      sut.whenProdBothFractions()

      sut.thenResultIs('1/5')
    })
  })
  describe('Règle: On lève une exception si le diviseur est égale à 0', () => {
    test('Exemple: 2/0 * 2/8 => exception', () => {
      sut.givenFirstFractionIs(2, 0).givenSecondFractionIs(2, 8)

      sut.shouldRaisedAnExceptionWhenComputeProd()
    })
    test('Exemple: 2/8 * 2/0 => exception', () => {
      sut.givenFirstFractionIs(2, 8).givenSecondFractionIs(2, 0)

      sut.shouldRaisedAnExceptionWhenComputeProd()
    })
  })
})

const createSut = () => {
  let firstFraction: Fraction
  let secondFraction: Fraction
  let computedResult: string
  return {
    givenFirstFractionIs(dividend: number, divider: number) {
      firstFraction = {dividend, divider}
      return this
    },
    givenSecondFractionIs(dividend: number, divider: number) {
      secondFraction = {dividend, divider}
    },
    whenProdBothFractions() {
      computedResult = fractions.prod(firstFraction, secondFraction)
    },
    thenResultIs(expectedResult: string) {
      expect(computedResult).toEqual(expectedResult)
    },
    shouldRaisedAnExceptionWhenComputeProd() {
      expect(() => fractions.prod(firstFraction, secondFraction)).toThrow()
    },
  }
}

type SUT = ReturnType<typeof createSut>
