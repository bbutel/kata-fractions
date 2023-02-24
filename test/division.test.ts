import {test} from '@jest/globals'

import {fractions} from '../src'
import {Fraction} from '../src/types'

let sut: SUT

beforeEach(() => {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  sut = createSut()
})

describe('Diviser des fractions', () => {
  describe('Règle: Diviser deux fractions ayant le même diviseur', () => {
    test('Exemple: 3/7 ÷ 2/7 = 3/2', () => {
      sut.givenFirstFractionIs(3, 7).givenSecondFractionIs(2, 7)

      sut.whenDivBothFractions()

      sut.thenResultIs('3/2')
    })
    test('Exemple: 2/8 ÷ 3/8 = 2/3', () => {
      sut.givenFirstFractionIs(2, 8).givenSecondFractionIs(3, 8)

      sut.whenDivBothFractions()

      sut.thenResultIs('2/3')
    })
  })
  describe('Règle: Diviser deux fractions ayant un diviseur différent', () => {
    test('Exemple: 3/2 ÷ 2/3 = 9/4', () => {
      sut.givenFirstFractionIs(3, 2).givenSecondFractionIs(2, 3)

      sut.whenDivBothFractions()

      sut.thenResultIs('9/4')
    })
  })
  describe('Règle: le résultat de la division est simpliable', () => {
    test('Exemple: 6/8 ÷ 4/8 = 6/4 = 3/2', () => {
      sut.givenFirstFractionIs(6, 8).givenSecondFractionIs(4, 8)

      sut.whenDivBothFractions()

      sut.thenResultIs('3/2')
    })
    test('Exemple: 6/8 ÷ 2/8 = 6/2 = 3', () => {
      sut.givenFirstFractionIs(6, 8).givenSecondFractionIs(2, 8)

      sut.whenDivBothFractions()

      sut.thenResultIs('3')
    })
    test('Exemple: 3/5 ÷ 2/6 = 18/10 = 9/5', () => {
      sut.givenFirstFractionIs(3, 5).givenSecondFractionIs(2, 6)

      sut.whenDivBothFractions()

      sut.thenResultIs('9/5')
    })
  })
  describe('Règle: On lève une exception si le diviseur est égale à 0', () => {
    test('Exemple: 2/0 ÷ 2/8 => exception', () => {
      sut.givenFirstFractionIs(2, 0).givenSecondFractionIs(2, 8)

      sut.shouldRaisedAnExceptionWhenComputeDiv()
    })
    test('Exemple: 2/8 ÷ 2/0 => exception', () => {
      sut.givenFirstFractionIs(2, 8).givenSecondFractionIs(2, 0)

      sut.shouldRaisedAnExceptionWhenComputeDiv()
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
    whenDivBothFractions() {
      computedResult = fractions.div(firstFraction, secondFraction)
    },
    thenResultIs(expectedResult: string) {
      expect(computedResult).toEqual(expectedResult)
    },
    shouldRaisedAnExceptionWhenComputeDiv() {
      expect(() => fractions.div(firstFraction, secondFraction)).toThrow()
    },
  }
}

type SUT = ReturnType<typeof createSut>
