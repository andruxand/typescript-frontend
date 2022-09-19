/* eslint-disable @typescript-eslint/prefer-optional-chain */
import React, { ReactElement } from 'react';
import { ApiResponse } from '../interfaces/api';
import { useGetItems } from '../hooks/api/items';
import { MoonIcon } from '../components/MoonIcon';
import { ItemHeader } from '../components/ItemHeader';
import { ItemsInterface } from '../interfaces/items';
import { ItemCard } from '../components/ItemCard';

function Home(): ReactElement {
  // Llamada al Hook API
  const response: ApiResponse = useGetItems('api/v1/items');
  const items: ItemsInterface[] = response.data as ItemsInterface[];

  const toggleDarkMode = () => {
    const storage = window.localStorage;
    if (
      storage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      storage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    } else {
      storage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div
      data-testid="container-home"
      className="flex flex-col min-h-screen bg-white dark:bg-gray-700"
    >
      <nav className="flex items-center justify-end h-16 px-4">
        <button
          className="flex p-2 text-black rounded hover:text-yellow-400 dark:text-white focus:outline-none hover:bg-gray-500 dark:hover:bg-gray-500 dark:hover:text-yellow-400"
          onClick={toggleDarkMode}
        >
          <MoonIcon />
        </button>
      </nav>
      <section className="dark:text-gray-100">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <ItemHeader />
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                {!items ? (
                  <p className="text-center">No se encontraron datos</p>
                ) : (
                  items?.map((item: ItemsInterface) => (
                    <ItemCard
                      key={item.id}
                      fecha={item.fecha}
                      nombreCompleto={item.nombreCompleto}
                      monto={item.monto}
                      pais={item.pais}
                      tipo={item.tipo}
                      estado={item.estado}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
