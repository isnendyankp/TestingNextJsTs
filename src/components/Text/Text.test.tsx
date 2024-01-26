import { render, screen } from '@testing-library/react';
import { describe } from 'node:test';
import Text from '.';
import React from 'react';

describe('Unit test for Text Component', () => {
   
    test('component should be return text', () => {
        render (<Text>{'testing text'}</Text>);
        const element = screen.getByText('testing text');
        expect(element).toMatchSnapshot();
    });

    test('component should be return text with className', () => {
        const document = render (<Text className={'testing-class'}>{'testing text'}</Text>);
        expect(document).toMatchSnapshot();
    });
});