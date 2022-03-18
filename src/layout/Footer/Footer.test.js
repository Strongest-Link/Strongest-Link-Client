import Footer from '.';
import { render, screen } from '@testing-library/react';


describe('Footer', () => {
    
    test('it conmtains imagee', () => {
        render(<Footer />)
        const footer = screen.getByRole('footer')
        expect(footer).toBeInTheDocument();

    });



})