import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doce } from 'src/interfaces/doce.interface';

@Injectable({ providedIn: 'root' })
export class EstoqueDoceService {
  constructor(private httpClient: HttpClient) {}

  getEstoque(): Observable<Doce[]> {
    return this.httpClient.get<Doce[]>('http://localhost:4000/estoqueDoce');
  }

  addDoce(doce: Doce): Observable<Doce> {
    return this.httpClient.post<Doce>(
      'http://localhost:4000/estoqueDoce/add',
      doce
    );
  }

  updateDoce(id: string, doce: Doce) {
    return this.httpClient.put<{ id: string; mensagem: string }>(
      `http://localhost:4000/estoqueDoce/${id}`,
      doce
    );
  }

  deleteDoce(id: string) {
    return this.httpClient.delete<{ id: string }>(
      `http://localhost:4000/estoqueDoce/${id}`
    );
  }
}
