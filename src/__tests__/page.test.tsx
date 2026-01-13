import { expect, test } from "vitest"

import { render, screen } from '@testing-library/react'
import Page from "../app/page"

test('addition', () => {
    render(<Page />)
    screen.getByRole('button', { name: '2' }).click()
    screen.getByRole('button', { name: '+' }).click()
    screen.getByRole('button', { name: '3' }).click()
    screen.getByRole('button', { name: '=' }).click()
    expect(screen.getByText('5')).toBeDefined()
})

test('substraction', () => {
    screen.getByRole('button', { name: '1' }).click()
    screen.getByRole('button', { name: '2' }).click()
    screen.getByRole('button', { name: '-' }).click()
    screen.getByRole('button', { name: '3' }).click()
    screen.getByRole('button', { name: '=' }).click()
    expect(screen.getByText('9')).toBeDefined()
})

test('multiplcation', () => {
    screen.getByRole('button', { name: '1' }).click()
    screen.getByRole('button', { name: '*' }).click()
    screen.getByRole('button', { name: '3' }).click()
    screen.getByRole('button', { name: '=' }).click()
    expect(screen.getByText('3')).toBeDefined()
})

test('division', () => {
    screen.getByRole('button', { name: '8' }).click()
    screen.getByRole('button', { name: '/' }).click()
    screen.getByRole('button', { name: '4' }).click()
    screen.getByRole('button', { name: '=' }).click()
    expect(screen.getByText('2')).toBeDefined()
})

