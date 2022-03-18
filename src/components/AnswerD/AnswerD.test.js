import AnswerD from '.';
import { render, screen } from '@testing-library/react';


describe('AnswerD', () => {
    
    test('it renders a div', () => {
        render(<AnswerD />)
        const div = screen.getByRole('choice-container')
        expect(div).toBeInTheDocument();

    });

    test('it renders the label D', () => {
        render(<AnswerD />)
        const labelD = screen.getByText('D')
        expect(labelD.textContent).toContain('D');
    });

    test("it renders a <p> tag", () => {
        render(<AnswerD />)
        let p = screen.getByRole("choice-text");
        expect(p).toBeInTheDocument();

    });

})