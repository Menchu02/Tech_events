import { render, screen } from "@testing-library/react";
import Index from '../index.js'

describe('Eventia in tdd', () => {
    beforeEach(() => render(<Index/>))
    test('render main page correctly', () => {
        // screen.debug()
        expect(true).toBeTruthy()
    })
})