import LeaderBoardTable from '.';
import { render, screen } from '@testing-library/react';


describe('LeaderBoardTable', () => {
    
    test('it renders a div', () => {
        render(<LeaderBoardTable />)
        const div = screen.getByRole('leaderboard-table')
        expect(div).toBeInTheDocument();

    });

    test('it renders the table header Rank', () => {
        render(<LeaderBoardTable />)
        const tableHearder1 = screen.getByText('Rank')
        expect(tableHearder1.textContent).toContain('Rank');
    });

    test('it renders the table header Username', () => {
        render(<LeaderBoardTable />)
        const tableHearder2 = screen.getByText('Username')
        expect(tableHearder2.textContent).toContain('Username');
    });

    test('it renders the table header Score', () => {
        render(<LeaderBoardTable />)
        const tableHearder3 = screen.getByText('Score')
        expect(tableHearder3.textContent).toContain('Score');
    });


})