// __tests__/index.test.jsx

/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import Entry from '../pages/[id]'
import {getData} from '../lib/data'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Lists/i,
    })

    expect(heading).toBeInTheDocument()
  })
})

describe('Entry', () => {
  it('renders character info', () => {
    render(<Entry />)

    const heading = screen.getByRole('heading', {
      name: /Character/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
