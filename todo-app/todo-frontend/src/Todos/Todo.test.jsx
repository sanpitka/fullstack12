import { render, screen } from '@testing-library/react'
import Todo from './Todo'
import { describe, it, expect, beforeEach, vi } from 'vitest'

describe('Todo component', () => {
  const mockTodoNotDone = {
    _id: '1',
    text: 'Test todo not done',
    done: false,
  }

  const mockOnDelete = vi.fn()
  const mockOnComplete = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders todo text', () => {
    render(<Todo todo={mockTodoNotDone} onDelete={mockOnDelete} onComplete={mockOnComplete} />)
    expect(screen.getByTestId('todo-text').textContent).toContain('Test todo not done')
  })
})
