import React, { ReactElement } from 'react';

export const ItemHeader = (): ReactElement => (
  <div className="col-span-12 sm:col-span-3">
    <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
      <h3 className="text-3xl font-semibold">Historal</h3>
      <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">
        Historial de Items
      </span>
    </div>
  </div>
);
