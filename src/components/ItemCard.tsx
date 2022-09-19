import React, { ReactElement } from 'react';
import { ItemCardInterface } from '../interfaces/itemCard';
import { LocationIcon } from './LocationIcon';
import { getPais, getEstado, getTipo } from '../utils/getEnum';

export const ItemCard = ({
  fecha,
  nombreCompleto,
  monto,
  pais,
  tipo,
  estado
}: ItemCardInterface): ReactElement => {
  return (
    <div className="flex flex-col dark:bg-gray-900 dark:text-gray-100 p-6 space-y-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold tracking-wide">{nombreCompleto}</h3>
      <time className="text-xs tracking-wide uppercase dark:text-gray-400">
        {fecha}
      </time>
      <div className="mt-3">
        <p className="flex items-center">
          <LocationIcon />
          {getEstado(estado)}, {getPais(pais)}
        </p>
        <p className="flex items-center">$ {monto}</p>
        <p className="flex items-center">{getTipo(tipo)}</p>
      </div>
    </div>
  );
};
