import Question from '.';
import { render, screen } from '@testing-library/react';


describe('Question', () => {
    
    test("it renders a <h2> tag", () => {
        render(<Question />)
        let h2 = screen.getByRole("question");
        expect(h2).toBeInTheDocument();

    });

})