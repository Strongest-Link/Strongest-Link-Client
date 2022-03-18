import Create from '.';
import { render, screen } from '@testing-library/react';


describe('Create', () => {
    
    test('it conmtains div', () => {
        render(<Create />)
        const div = screen.getByRole('CreateDiv')
        expect(div).toBeInTheDocument();

    });



})