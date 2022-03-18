import WaitingRoom2 from '.';
import { render, screen } from '@testing-library/react';


describe('WaitingRoom2', () => {
    
    test('it renders a div', () => {
        render(<WaitingRoom2 />)
        const div = screen.getByRole('waitingRoom2')
        expect(div).toBeInTheDocument();

    });

    test('it renders the text Question', () => {
        render(<WaitingRoom2 />)
        const text = screen.getByRole('text')
        expect(text).toBeInTheDocument();
    });



})