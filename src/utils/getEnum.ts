import { Paises, Estados, Tipos } from '../interfaces/items';

export const getPais = (option: string): Paises => {
  return Paises[option as unknown as keyof typeof Paises];
};

export const getEstado = (option: string): Estados => {
  return Estados[option as unknown as keyof typeof Estados];
};

export const getTipo = (option: string): Tipos => {
  return Tipos[option as unknown as keyof typeof Tipos];
};
