import { Item } from './item.interface';

export interface Pedido {
  id_cliente: string;
  id_pedido?: string;
  pedido: Item[];
  endereco: FormData;
  data: string;
}
