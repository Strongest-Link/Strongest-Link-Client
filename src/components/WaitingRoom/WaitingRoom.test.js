import WaitingRoom from '.';
import { render, screen } from '@testing-library/react';


describe('WaitingRoom', () => {
    
    test('it renders a div', () => {
        render(<WaitingRoom />)
        const div = screen.getByRole('waitingRoom')
        expect(div).toBeInTheDocument();

    });

    test('it renders a button', () => {
        render(<WaitingRoom />)
        const button = screen.getByRole('startGame')
        expect(button).toBeInTheDocument();

    });




})