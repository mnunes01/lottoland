import { h} from "preact";
import { render, fireEvent} from '@testing-library/preact';

import GameCard from "../../../../src/components/molecules/gamecard";
//jest.mock("../../../../src/components/atoms/textArea", () => <div data-testid="text-area" />);
//jest.mock("../../../../src/components/atoms/info", () => <div data-testid="info-button" />);
//jest.mock("../../../../src/components/atoms/avatar", () => <div data-testid="image-avatar" />);
//jest.mock("../../../../src/components/atoms/cta", () => <div data-testid="cta-button" />);

describe('GameCard', () => {
  
    test('render game card', async () => {
        const { queryByTestId } = await render(<GameCard/>)
        expect(queryByTestId('game-card')).toBeTruthy()
    });

    test('render game card', async () => {
        const { queryByTestId } = await render(<GameCard/>)
        expect(queryByTestId('game-card')).toBeTruthy()

        //lazy load skeleton should display since observer is mocked to null and initial status is to hide card content and display skeleton
        expect(queryByTestId('game-card-skeleton')).toBeTruthy()
    });


    test('render game card with values', async () => {
        //cheat to make the card display - fires the oldborwser fallback behaviour
        window.IntersectionObserver = undefined

        const cb1 = jest.fn();
        const cb2 = jest.fn();

        const { queryByTestId, getByText, getByRole } = await render(
            <GameCard
                imagePath = 'gamecard_default.jpg'
                caption = 'gamecard_caption'
                title = 'gamecard_title'
                subtitle = 'gamecard_subtitle'
                ctaText = 'gamecard_ctaText'
                ctaAction = {cb1}
                infoAction = {cb2}
            />
        )
        expect(queryByTestId('game-card')).toBeTruthy()
    
        expect(getByText(/gamecard_caption/i)).toBeInTheDocument();
        expect(getByText(/gamecard_title/i)).toBeInTheDocument();    
        expect(getByText(/gamecard_subtitle/i)).toBeInTheDocument();
        expect(getByText(/gamecard_ctaText/i)).toBeInTheDocument();

        const buttonNode = getByRole('button', {name: 'gamecard_ctaText'})
        fireEvent.click(buttonNode)
        
        expect(cb1).toHaveBeenCalledTimes(1);

    });

});
