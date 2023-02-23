import {test} from '@jest/globals'

import {fractions} from '../src'
import {Fraction} from '../src/types'

let sut: SUT

beforeEach(() => {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  sut = createSut()
})

describe('Additionner des fractions', () => {
  describe('Règle: Additionner deux fractions ayant le même diviseur', () => {
    test('Exemple: 4/7 + 2/7 = 6/7', () => {
      sut.givenFirstFractionIs(4, 7).givenSecondFractionIs(2, 7)

      sut.whenSumBothFractions()

      sut.thenResultIs('6/7')
    })
    test('Exemple: 3/8 + 6/8 = 9/8', () => {
      sut.givenFirstFractionIs(3, 8).givenSecondFractionIs(6, 8)

      sut.whenSumBothFractions()

      sut.thenResultIs('9/8')
    })
  })
  describe('Règle: Additionner deux fractions ayant un diviseur différent', () => {
    test('Exemple: 1/2 + 2/3 = 7/6', () => {
      sut.givenFirstFractionIs(1, 2).givenSecondFractionIs(2, 3)

      sut.whenSumBothFractions()

      sut.thenResultIs('7/6')
    })
  })
  describe("Règle: le résultat de l'addition est simpliable", () => {
    test('Exemple: 2/8 + 2/8 = 4/8 = 1/2', () => {
      sut.givenFirstFractionIs(2, 8).givenSecondFractionIs(2, 8)

      sut.whenSumBothFractions()

      sut.thenResultIs('1/2')
    })
    test('Exemple: 5/3 + 7/3 = 12/3 = 4', () => {
      sut.givenFirstFractionIs(5, 3).givenSecondFractionIs(7, 3)

      sut.whenSumBothFractions()

      sut.thenResultIs('4')
    })
    test('Exemple: 3/5 + 2/6 = 28/30 = 14/15', () => {
      sut.givenFirstFractionIs(3, 5).givenSecondFractionIs(2, 6)

      sut.whenSumBothFractions()

      sut.thenResultIs('14/15')
    })
  })
  describe('Règle: On lève une exception si le diviseur est égale à 0', () => {
    test('Exemple: 2/0 + 2/8 => exception', () => {
      sut.givenFirstFractionIs(2, 0).givenSecondFractionIs(2, 8)

      sut.shouldRaisedAnExceptionWhenComputeSum()
    })
    test('Exemple: 2/8 + 2/0 => exception', () => {
      sut.givenFirstFractionIs(2, 8).givenSecondFractionIs(2, 0)

      sut.shouldRaisedAnExceptionWhenComputeSum()
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
    whenSumBothFractions() {
      computedResult = fractions.sum(firstFraction, secondFraction)
    },
    thenResultIs(expectedResult: string) {
      expect(computedResult).toEqual(expectedResult)
    },
    shouldRaisedAnExceptionWhenComputeSum() {
      expect(() => fractions.sum(firstFraction, secondFraction)).toThrow()
    },
  }
}

type SUT = ReturnType<typeof createSut>
