import { h} from "preact";
import { render, fireEvent, screen} from '@testing-library/preact';

import "../../../../src/components/atoms/textArea";

describe('TextArea', () => {
  
    test('render text area with empty values', async () => {
        const { queryAllByRole } = await render(<text-area/>)
        const allHeadings = queryAllByRole('heading')

        expect(allHeadings).toHaveLength(3)
        expect(allHeadings[0]).toHaveTextContent('');
        expect(allHeadings[1]).toHaveTextContent('');
        expect(allHeadings[2]).toHaveTextContent('');
    });


    test('render text area with passed values ', async () => {
        const { queryAllByRole } = await render(<text-area title='title' subtitle='subtitle' caption='caption'/>)
        const allHeadings = queryAllByRole('heading')

        expect(allHeadings).toHaveLength(3)
        expect(allHeadings[0]).toHaveTextContent('caption');
        expect(allHeadings[1]).toHaveTextContent('title');
        expect(allHeadings[2]).toHaveTextContent('subtitle');
    });
});
