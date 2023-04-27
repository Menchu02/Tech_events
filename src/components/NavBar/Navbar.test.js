import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";

describe('Navbar in tdd', () => {
    beforeEach(() => render(<NavBar/>))
    test('render navbar component correctly', () => {
        screen.debug()
        expect(true).toBeTruthy()
    })
})