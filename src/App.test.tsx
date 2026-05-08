import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('Customer Intelligence Graph', () => {
  it('renders the flagship narrative', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /see the commercial story as connected pressure/i,
      }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /nodes, edges, and pressure paths/i,
      }),
    ).toBeInTheDocument()

    expect(screen.getByText(/Northstar Cloud/i)).toBeInTheDocument()
  })
})
