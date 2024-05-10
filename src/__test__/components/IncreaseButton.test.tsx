import { expect, test, describe } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { IncreaseButton } from '../../components/buttons/Increase'

describe('<IncreaseButton />', () => {
  test('should increase count by 1', () => {
    // Act
    render(<IncreaseButton />)

    const button = screen.getByText('0')

    fireEvent.click(button)

    // Assert
    expect(button.textContent).toBe('1')
  })

  test('should increase count by 2', () => {
    // Act
    render(<IncreaseButton />)

    const button = screen.getByText('0')

    fireEvent.click(button)
    fireEvent.click(button)

    // Assert
    expect(button.textContent).toBe('2')
  })
})
