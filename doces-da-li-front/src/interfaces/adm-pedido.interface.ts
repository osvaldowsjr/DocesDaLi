import { IEndereco } from './endereco.interface';
import { Pedido } from './pedido.interface';

export interface AdmPedidos {
  data: string;
  endereco: IEndereco;
  id: string;
  id_cliente: string;
  pedido: Pedido[];
}
