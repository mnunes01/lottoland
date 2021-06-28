import { h} from "preact";
import { render, fireEvent} from '@testing-library/preact';

import "../../../../src/components/molecules/switcher";


const __DEFAULT_CURRENCY = "EUR"
const __OPTIONS = [
        {
            text: "Name (A-Z)",
            field: "displayName",
            order: "asc",
            checked: true
        },
        {
            text: "Stake (min to max)",
            field: `currencyData['${__DEFAULT_CURRENCY}']['minimumStake']`,
            order: "asc"
        },
        {
            text: "Stake (max to min)",
            field: `currencyData['${__DEFAULT_CURRENCY}']['minimumStake']`,
            order: "desc"
        }
    ]

describe('Switcher', () => {
  
    test('render switcher, test click to select options to be checked', async () => {
        
        
        const cb = jest.fn();

        const {queryByRole, getByTestId, getByLabelText} = await render(
            <sort-switcher
                options={__OPTIONS}
                title="switcher_title"
                name="switcher_name"
                handleChangeOption={cb}
            />
        )

        expect(getByTestId('switcher-button')).toBeTruthy()

        
        const buttonNode1 = getByLabelText(__OPTIONS[0].text, { selector: 'input'})
        const buttonNode2 = getByLabelText(__OPTIONS[1].text, { selector: 'input'})
        const buttonNode3 = getByLabelText(__OPTIONS[2].text, { selector: 'input'})

        
        fireEvent.click(buttonNode1)
        expect(buttonNode1.checked).toBeTruthy()    
        expect(buttonNode2.checked).toBeFalsy()    
        expect(buttonNode3.checked).toBeFalsy()    
        
        
        fireEvent.click(buttonNode2)
        expect(buttonNode1.checked).toBeFalsy()    
        expect(buttonNode2.checked).toBeTruthy()    
        expect(buttonNode3.checked).toBeFalsy()   

        
        fireEvent.click(buttonNode3)
        expect(buttonNode1.checked).toBeFalsy()
        expect(buttonNode2.checked).toBeFalsy()
        expect(buttonNode3.checked).toBeTruthy()

    });

});
