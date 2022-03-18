import LobbyList from '.';
import { render, screen } from '@testing-library/react';


describe('LeaderBoardTable', () => {
    
    test('it renders a div', () => {
        render(<LobbyList />)
        const div = screen.getByRole('wholeLobby')
        expect(div).toBeInTheDocument();

    });

    test('it renders the table header Rank', () => {
        render(<LobbyList />)
        const span = screen.getByText('lobbyname')
        expect(span).toBeInTheDocument();
    });



})