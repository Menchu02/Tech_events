import { render, screen } from "@testing-library/react";
// import Index from './index.js'
import App from "./App.js";


describe('Eventia in tdd', () => {
    beforeEach(() => render(<App/>))
    test('render main page correctly', () => {
        screen.debug()
        expect(true).toBeTruthy()
    })
})