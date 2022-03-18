import Home from '.';
import { render, screen } from '@testing-library/react';


describe('Home', () => {
    
    test('it conmtains imagee', () => {
        render(<Home />)
        const img = screen.getByRole('img')
        expect(img).toBeInTheDocument();

    });

    test('it conmtains rules text', () => {
        render(<Home />)
        const rules = screen.getByRole('rules')
        expect(rules).toBeInTheDocument();

    });


})