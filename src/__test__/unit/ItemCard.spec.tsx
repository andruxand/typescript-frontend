
import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ItemCard } from '../../components/ItemCard';
import { Estados, Paises, Tipos } from '../../interfaces/items';

test('Componente ItemCard con props correctos', () => {
  const item = {
    id: 1,
    fecha: '2022-01-01',
    nombreCompleto: 'Carlos Suárez',
    monto: 20.55,
    pais: 'COL',
    tipo: 'Basic',
    estado: 'VC'
  }
  const component = render(
    <ItemCard
      key={item.id}
      fecha={item.fecha}
      nombreCompleto={item.nombreCompleto}
      monto={item.monto}
      pais={item.pais as Paises}
      tipo={item.tipo as Tipos}
      estado={item.estado as Estados}
    />
  );
  expect(component.container).toHaveTextContent(/2022-01-01/);
  expect(component.container).toHaveTextContent(/Carlos Suárez/);
  expect(component.container).toHaveTextContent(/20.55/);
  expect(component.container).toHaveTextContent(/Valle del Cauca, Colombia/);
  expect(component.container).toHaveTextContent(/Básico/);
});

test('Componente ItemCard con props incorrectos', () => {
  const item = {
    id: 1,
    fecha: '2022-01-01',
    nombreCompleto: 'Carlos Suárez',
    monto: 20.50,
    pais: 'CO',
    tipo: 'Basi',
    estado: 'V'
  }
  const component = render(
    <ItemCard
      key={item.id}
      fecha={item.fecha}
      nombreCompleto={item.nombreCompleto}
      monto={item.monto}
      pais={item.pais as Paises}
      tipo={item.tipo as Tipos}
      estado={item.estado as Estados}
    />
  );
  expect(component.container).toHaveTextContent(/,/);
});

// test...

export {};