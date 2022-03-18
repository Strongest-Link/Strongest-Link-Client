import { render, screen } from '@testing-library/react';
import JoinRoom from '.'


describe("JoinRoom", () => {
    it('should render a div', () => {
        render(<JoinRoom />)
        const div = screen.getByRole("joinRoom");
        expect(div).toBeInTheDocument();
    });

    it('should render a correct text for lobby', () => {
        render(<JoinRoom />)
        const label = screen.getByRole("textLobby");
        expect(label).toBeInTheDocument();
    });

    it('should render a correct text for nickname', () => {
        render(<JoinRoom />)
        const label = screen.getByRole("textNickname");
        expect(label).toBeInTheDocument();
    });
    
    
    it('should render a button', () => {
        render(<JoinRoom />)
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
    


})