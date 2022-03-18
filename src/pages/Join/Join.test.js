import Join from '.';
import { render, screen } from '@testing-library/react';


describe('Join', () => {
    
    test('it conmtains text', () => {
        render(<Join />)
        const h1 = screen.getByRole('joinAGame')
        expect(h1).toBeInTheDocument();

    });

})