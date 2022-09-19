
import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ItemHeader } from '../../components/ItemHeader';

test('Renderiza componente itemHeader', () => {
  const component = render(<ItemHeader />);
  expect(component.container).toHaveTextContent(/Historial/);
});

// test...

export {};