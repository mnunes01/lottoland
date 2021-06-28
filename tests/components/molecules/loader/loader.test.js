import { h} from "preact";
import { render} from '@testing-library/preact';

import "../../../../src/components/molecules/loader";

describe('Loader', () => {
  
    test('render progres load, no text element', async () => {
        const {queryByRole} = await render(<progress-load/>)
        expect(queryByRole('heading')).toBeFalsy()
        expect(queryByRole('progressbar')).toBeTruthy()
    });

    test('render progres load, with text element', async () => {
        const {queryByRole} = await render(<progress-load text='loading'/>)
        expect(queryByRole('heading')).toHaveTextContent('loading')
        expect(queryByRole('progressbar')).toBeTruthy()
    });

});
