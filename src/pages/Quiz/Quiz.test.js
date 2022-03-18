import Quiz from '.';
import { render, screen } from '@testing-library/react';


describe('Quiz', () => {
    
    test('it conmtains a div', () => {
        render(<Quiz />)
        const div = screen.getByRole("div")
        expect(div).toBeInTheDocument();

    });

})