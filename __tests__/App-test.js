/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

import {render, fireEvent, waitFor} from '@testing-library/react-native';

it('renders correctly', async () => {
  // when: rendered
  const {findByA11yLabel, getByA11yLabel, getByText} = render(<App />);

  // then: operand input is displayed
  const operandInput = getByA11yLabel('Enter operand');

  // when: typing into operand and clicking calculate button
  fireEvent.changeText(operandInput, '16');
  const calculateButton = getByText('Calculate Square');
  fireEvent.press(calculateButton);

  // then: result is displayed
  const resultText = await findByA11yLabel('Result');
  expect(resultText).toHaveTextContent('256');
});
