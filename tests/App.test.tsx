import React from 'react'
import userEvent from '@testing-library/user-event'
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../src/App'

describe('<App />', () => {
    // test('should work', () => {
    //     render(<App />)
    //     expect(
    //         screen.getByText('Technical test React')
    //     ).toBeDefined()
    // })

    test('should add items and remove them', async () => {
        const user = userEvent.setup()

        render(<App />)

        // search the input
        const input = screen.getByRole('textbox')
        expect(input).toBeDefined()

        // search the form
        const form = screen.getByRole('form')
        expect(form).toBeDefined()

        const button = form.querySelector('button')
        expect(button).toBeDefined()

        const text = crypto.randomUUID()
        await user.type(input, text)
        await user.click(button!)

        // check that the element was created
        const list = screen.getByRole('list') // ul
        expect(list).toBeDefined()
        expect(list.childElementCount).toBe(1)

        // check deletion
        const item = screen.getByText(text)
        const removeButton = item.querySelector('button')
        expect(removeButton).toBeDefined()

        await user.click(removeButton!)
        const noResults = screen.getByText('There are no elements in the list')
        expect(noResults).toBeDefined()
    })
})