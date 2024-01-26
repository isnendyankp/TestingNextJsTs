import { render } from '@testing-library/react';
import { describe } from 'node:test';
import Text from '.';
import React from 'react';

describe('Unit test for Text Component', () => {
   
    test('component should be return text', () => {
        render (<Text>{'testing text'}</Text>);

        console.log('testing text');
    });
});