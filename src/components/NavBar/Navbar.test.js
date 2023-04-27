import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";

describe('Navbar in tdd', () => {
    beforeEach(() => render(<NavBar/>))
    test('render navbar component correctly', () => {
        screen.debug()
        expect(true).toBeTruthy()
    })

    describe('Hay un h1 con el nombre de la empresa Eventia'), () => {
        test('Hay un h1 con el nombre de la empresa Eventia'), () => {
            const titulo = screen.getByRole('heading', {name:/EVENTIA/i})
            expect(titulo).toBeInTheDocument();
        }
    }
})