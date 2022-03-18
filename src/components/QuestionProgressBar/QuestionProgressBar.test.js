import QuestionProgressBar from '.';
import { render, screen } from '@testing-library/react';


describe('QuestionProgressBar', () => {
    
    test('it renders a div', () => {
        render(<QuestionProgressBar />)
        const div = screen.getByRole('progressGroup')
        expect(div).toBeInTheDocument();

    });

    test('it renders the text Question', () => {
        render(<QuestionProgressBar />)
        const text = screen.getByRole('progressText')
        expect(text.textContent).toContain('Question');
    });

    test('it renders the question counter', () => {
        render(<QuestionProgressBar />)
        const questionCounter = screen.getByRole('questionCounter')
        expect(questionCounter.textContent).toContain("0");
    });

    test('it renders a progressBar div', () => {
        render(<QuestionProgressBar />)
        const div = screen.getByRole('progressBar')
        expect(div).toBeInTheDocument();

    });


})