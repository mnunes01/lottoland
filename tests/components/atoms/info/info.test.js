import { h} from "preact";
import { render, fireEvent, screen} from '@testing-library/preact';

import "../../../../src/components/atoms/info";

describe('Info', () => {
    
    test('should render with i class icon-info (default value)', async () => {
        
        const { getByRole } = await render(<info-button/>)
        expect(getByRole('img')).toHaveClass('icon-info')

    });

    test('should render with i class icon-test (non default value)', async () => {
        
        const { getByRole } = await render(<info-button icon_class="icon-test"/>)
        expect(getByRole('img')).toHaveClass('icon-test')

    });


    test('should render with i class icon-info (default value) and fire cb ', async () => {
        
        const cb = jest.fn();
        
        const { getByRole } = await render(<info-button action={cb}/>)
        
        expect(getByRole('img')).toHaveClass('icon-info')

        const buttonNode = getByRole('button')

        fireEvent.click(buttonNode)
        expect(cb).toHaveBeenCalledTimes(1);

    });

});
