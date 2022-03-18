import { render, screen, fireEvent } from '@testing-library/react';
import CreateRoom from '.'

const mockedSetInput = jest.fn();

describe("AddInput", () => {
    it('should render a div', () => {
        render(<CreateRoom />)
        const div = screen.getByRole("Create");
        expect(div).toBeInTheDocument();
    });

    it('should render a correct text', () => {
        render(<CreateRoom />)
        const h1 = screen.getByRole("create-header");
        expect(h1).toBeInTheDocument();
    });
    
    it('should be able to set the correct value for category', () => {
        render(<CreateRoom />)
        const inputElement = screen.getByRole("category")
        expect(inputElement).toBeInTheDocument();
    });

    it('should be able to set the correct value for difficulty', () => {
        render(
            <CreateRoom 
                input={[]}
                setInput={mockedSetInput}
            />
        );
        const inputElement = screen.getByRole("difficulty")
        fireEvent.click(inputElement)
        fireEvent.change(inputElement, { target: { value: "easy" } })
        expect(inputElement.value).toBe("easy");
    });

    it('should be able to set the correct value for NumberOfQuestions', () => {
        render(
            <CreateRoom 
                input={[]}
                setInput={mockedSetInput}
            />
        );
        const inputElement = screen.getByRole("NumberOfQuestions")
        fireEvent.click(inputElement)
        fireEvent.change(inputElement, { target: { value: "5" } })
        expect(inputElement.value).toBe("5");
    });
    

})