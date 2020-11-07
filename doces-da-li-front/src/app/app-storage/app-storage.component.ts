import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Doce } from 'src/interfaces/doce.interface';
import { EstoqueDoceService } from 'src/service/estoqueDoce.service';
import { item } from 'src/_models/slides';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-storage',
  templateUrl: './app-storage.component.html',
  styleUrls: ['./app-storage.component.css'],
})
export class AppStorageComponent {
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  doces: Doce[];
  dataSource: MatTableDataSource<Doce>;
  displayedColumns: string[] = [
    'ID',
    'Nome',
    'Preço',
    'Descrição',
    'Imagem',
    'Action',
  ];

  constructor(
    public dialog: MatDialog,
    private estoqueDoceService: EstoqueDoceService
  ) {
    this.estoqueDoceService
      .getEstoque()
      .subscribe((data) => (this.doces = data));
  }

  openDialog(action, obj) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '20%';

    dialogConfig.data = {
      data: obj,
      names: this.displayedColumns,
      action: action,
    };
    const dialogRef = this.dialog.open(DialogBoxComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event == 'Adicionar') {
        this.addRowData(result.data);
      } else if (result.event == 'Editar') {
        this.updateRowData(result.data);
      } else if (result.event == 'Deletar') {
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj) {
    const doce = {
      nome: row_obj.first,
      preco: row_obj.second,
      descricao: row_obj.third,
      urlImagem: row_obj.fourth,
    } as Doce;

    this.estoqueDoceService
      .addDoce(doce)
      .subscribe((result) => this.doces.push(result));
    this.table.renderRows();
    this.estoqueDoceService
      .getEstoque()
      .subscribe((data) => (this.doces = data));
  }

  updateRowData(row_obj) {
    this.doces = this.doces.filter((value, key) => {
      if (value.id == row_obj.id) {
        value.id = row_obj.id;
        value.nome = row_obj.first;
        value.preco = row_obj.second;
        value.descricao = row_obj.third;
        value.urlImagem = row_obj.fourth;
      }

      this.estoqueDoceService.updateDoce(row_obj.id, row_obj).subscribe();
      this.estoqueDoceService
        .getEstoque()
        .subscribe((data) => (this.doces = data));
      return true;
    });
  }

  deleteRowData(row_obj) {
    this.doces = this.doces.filter((value, key) => {
      return value.id != row_obj.id;
    });

    this.estoqueDoceService.deleteDoce(row_obj.id).subscribe();
  }
}
