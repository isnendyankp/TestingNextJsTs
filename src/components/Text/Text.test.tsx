import { render } from '@testing-library/react';
import { describe } from 'node:test';
import Text from '.';

describe('Unit test for Text Component', () => {
   
    test('component should be return text', () => {
        const { getByText } = render(<Text>Text</Text>);
        const expected = getByText('testing text');

        console.log(expected);
    });
});