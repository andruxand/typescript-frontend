import { ItemsInterface } from './items';

export type ItemCardInterface = Omit<ItemsInterface, 'id'>;
