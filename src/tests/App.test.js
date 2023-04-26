import App from '../App';
import { render, screen } from '@testing-library/react'

describe('radio-steaming in tdd'), () => {
    beforeEach(() => render(<App/>))
    test('renders Main page correctly', () =>{
        // screen.debug();
        expect(true).toBeTruthy()
    })
}