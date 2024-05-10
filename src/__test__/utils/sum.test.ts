import { test, expect } from 'vitest'
import { sum } from '../../utils/sum'

test('should add 1 + 2 to be equal 3', () => {
  const result = sum(1, 2)

  expect(result).toBe(3)
})
