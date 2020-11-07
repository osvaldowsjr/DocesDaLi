import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingrediente } from 'src/interfaces/ingrediente.interface';

@Injectable({ providedIn: 'root' })
export class EstoqueService {
  constructor(private httpClient: HttpClient) {}

  getEstoque(): Observable<Ingrediente[]> {
    return this.httpClient.get<Ingrediente[]>('http://localhost:4000/estoque');
  }

  addIngrediente(ingrediente: Ingrediente): Observable<Ingrediente> {
    return this.httpClient.post<Ingrediente>(
      'http://localhost:4000/estoque/add',
      ingrediente
    );
  }

  updateIngrediente(id: string, ingrediente: Ingrediente) {
    return this.httpClient.put<{ id: string; mensagem: string }>(
      `http://localhost:4000/estoque/${id}`,
      ingrediente
    );
  }

  deleteIngrediente(id: string) {
    return this.httpClient.delete<{ id: string }>(
      `http://localhost:4000/estoque/${id}`
    );
  }
}
