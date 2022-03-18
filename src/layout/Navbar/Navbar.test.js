import Navbar from '.';
import { render, screen } from '@testing-library/react';


describe('Navbar', () => {
    
    test('it conmtains navbar', () => {
        render(<Navbar />)
        const nav = screen.getByRole('nav')
        expect(nav).toBeInTheDocument();

    });



})