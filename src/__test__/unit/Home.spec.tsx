
import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../../layouts/Home';

test('Primera prueba. Siempre debe pasar', () => { 
  expect(true).toBe(true); 
});

test('Renderiza página Home', () => {
  const component = render(<Home />);
  const container = component.getByTestId('container-home');
  expect(container).toHaveClass('min-h-screen');
});

// test...

export {};