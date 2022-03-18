import { render, screen } from '@testing-library/react';
import AnswerB from '.';

describe('AnswerB', () => {
    
    test('it renders a div', () => {
        render(<AnswerB />)
        const div = screen.getByRole('choice-container')
        expect(div).toBeInTheDocument();

    });

    test('it renders the label B', () => {
        render(<AnswerB />)
        const labelB = screen.getByText('B')
        expect(labelB.textContent).toContain('B');
    });

    test("it renders a <p> tag", () => {
        render(<AnswerB />)
        let p = screen.getByRole("choice-text");
        expect(p).toBeInTheDocument();

    });

})