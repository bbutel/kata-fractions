import {test} from '@jest/globals'

import {fractions} from '../src'
import {Fraction} from '../src/types'

let sut: SUT

beforeEach(() => {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  sut = createSut()
})

describe('Soustraire des fractions', () => {
  describe('Règle: Soustraire deux fractions ayant le même diviseur', () => {
    test('Exemple: 4/7 - 2/7 = 2/7', () => {
      sut.givenFirstFractionIs(4, 7).givenSecondFractionIs(2, 7)

      sut.whenDiffBothFractions()

      sut.thenResultIs('2/7')
    })
    test('Exemple: 2/8 - 3/8 = -1/8', () => {
      sut.givenFirstFractionIs(2, 8).givenSecondFractionIs(3, 8)

      sut.whenDiffBothFractions()

      sut.thenResultIs('-1/8')
    })
  })
  describe('Règle: Soustraire deux fractions ayant un diviseur différent', () => {
    test('Exemple: 3/2 - 2/3 = 5/6', () => {
      sut.givenFirstFractionIs(3, 2).givenSecondFractionIs(2, 3)

      sut.whenDiffBothFractions()

      sut.thenResultIs('5/6')
    })
  })
  describe('Règle: le résultat de la soustraction est simpliable', () => {
    test('Exemple: 6/8 - 2/8 = 4/8 = 1/2', () => {
      sut.givenFirstFractionIs(6, 8).givenSecondFractionIs(2, 8)

      sut.whenDiffBothFractions()

      sut.thenResultIs('1/2')
    })
    test('Exemple: 19/3 - 7/3 = 12/3 = 4', () => {
      sut.givenFirstFractionIs(19, 3).givenSecondFractionIs(7, 3)

      sut.whenDiffBothFractions()

      sut.thenResultIs('4')
    })
    test('Exemple: 3/5 - 2/6 = 8/30 = 4/15', () => {
      sut.givenFirstFractionIs(3, 5).givenSecondFractionIs(2, 6)

      sut.whenDiffBothFractions()

      sut.thenResultIs('4/15')
    })
  })
  describe('Règle: On lève une exception si le diviseur est égale à 0', () => {
    test('Exemple: 2/0 - 2/8 => exception', () => {
      sut.givenFirstFractionIs(2, 0).givenSecondFractionIs(2, 8)

      sut.shouldRaisedAnExceptionWhenComputeDiff()
    })
    test('Exemple: 2/8 - 2/0 => exception', () => {
      sut.givenFirstFractionIs(2, 8).givenSecondFractionIs(2, 0)

      sut.shouldRaisedAnExceptionWhenComputeDiff()
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
    whenDiffBothFractions() {
      computedResult = fractions.diff(firstFraction, secondFraction)
    },
    thenResultIs(expectedResult: string) {
      expect(computedResult).toEqual(expectedResult)
    },
    shouldRaisedAnExceptionWhenComputeDiff() {
      expect(() => fractions.diff(firstFraction, secondFraction)).toThrow()
    },
  }
}

type SUT = ReturnType<typeof createSut>
