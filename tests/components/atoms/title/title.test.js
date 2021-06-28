import { h} from "preact";
import { render} from '@testing-library/preact';

import "../../../../src/components/atoms/title";

describe('Title', () => {
  
    test('render text area with empty values', async () => {
        const { queryByRole } = await render(<page-title/>)
        expect(queryByRole('heading')).toHaveTextContent('');
    });


    test('render text area with passed values ', async () => {
        const { queryByRole } = await render(<page-title text='title'/>)
        expect(queryByRole('heading')).toHaveTextContent('title');
    });
});
