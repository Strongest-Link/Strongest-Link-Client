import AnswerC from '.';
import { render, screen } from '@testing-library/react';


describe('AnswerC', () => {
    
    test('it renders a div', () => {
        render(<AnswerC />)
        const div = screen.getByRole('choice-container')
        expect(div).toBeInTheDocument();

    });

    test('it renders the label C', () => {
        render(<AnswerC />)
        const labelC = screen.getByText('C')
        expect(labelC.textContent).toContain('C');
    });

    test("it renders a <p> tag", () => {
        render(<AnswerC />)
        let p = screen.getByRole("choice-text");
        expect(p).toBeInTheDocument();

    });

})