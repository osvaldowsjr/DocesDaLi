import { IEndereco } from './endereco.interface';
import { Iitem } from './item.interface';

export interface Pedido {
  id_cliente: string;
  id_pedido?: string;
  pedido: Iitem[];
  endereco: FormData;
  data: string;
}
