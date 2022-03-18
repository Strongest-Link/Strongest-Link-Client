import AnswerA from '.';
import { render, screen } from '@testing-library/react';

describe('AnswerA', () => {
    
    test('it renders a div', () => {
        render(<AnswerA />)
        const div = screen.getByRole('choice-container')
        expect(div).toBeInTheDocument();

    });

    test('it renders the label A', () => {
        render(<AnswerA />)
        const labelA = screen.getByText('A')
        expect(labelA.textContent).toContain('A');
    });

    test("it renders a <p> tag", () => {
        render(<AnswerA />)
        let p = screen.getByRole("choice-text");
        expect(p).toBeInTheDocument();

    });

})