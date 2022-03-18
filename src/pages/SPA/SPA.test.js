import SPA from '.';
import { render, screen } from '@testing-library/react';


describe('SPA', () => {
    
    test('it conmtains buttons', () => {
        render(<SPA />)
        const buttons = screen.getByRole("buttons")
        expect(buttons).toBeInTheDocument();

    });

})