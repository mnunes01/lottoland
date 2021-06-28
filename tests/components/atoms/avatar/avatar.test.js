import { h} from "preact";
import { render, fireEvent, screen} from '@testing-library/preact';

import "../../../../src/components/atoms/avatar";

describe('Avatar', () => {
  
    test('if path is not passed or empty string it should render without image element', async () => {
        const { queryByRole } = await render(<image-avatar/>)
        expect(queryByRole('img')).toBeNull()
    });  

    test('should render with image and img source should be placeholder.jpg', async () => {
        const { getByAltText } = await render(<image-avatar alt='placeholder' path='placeholder.jpg'/>)
        const image = getByAltText('placeholder')
        expect(image.src).toContain('placeholder.jpg')
    });
});

