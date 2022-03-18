import Leaderboard from '.';
import { render, screen } from '@testing-library/react';


describe('Leaderboard', () => {
    
    test('it conmtains leaderboard', () => {
        render(<Leaderboard />)
        const text = screen.getByText("Leaderboard")
        expect(text.textContent).toContain('Leaderboard');

    });

})