import { h} from "preact";
import { render, fireEvent} from '@testing-library/preact';

import "../../../../src/components/atoms/cta";

describe('Cta', () => {
    
    test('should render button with text play', async () => {
        
        const { getByRole } = await render(<cta-button text='play' action={undefined} />)
        expect(getByRole('button')).toHaveTextContent('play');
        
    });


    test('should render button with text play and fire the action cb', async () => {
        
        const cb = jest.fn();

        const { getByRole } = await render(<cta-button text='play' action={cb} />)

        const buttonNode = getByRole('button')
        fireEvent.click(buttonNode)
        
        expect(buttonNode).toHaveTextContent('play');
        expect(cb).toHaveBeenCalledTimes(1);
        
    });
});
