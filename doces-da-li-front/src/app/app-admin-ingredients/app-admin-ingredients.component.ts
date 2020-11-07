import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Estoque } from 'src/interfaces/estoque.interface';
import { Ingrediente } from 'src/interfaces/ingrediente.interface';
import { EstoqueService } from 'src/service/estoque.service';
import { ingredient, item } from 'src/_models/slides';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-admin-ingredients',
  templateUrl: './app-admin-ingredients.component.html',
  styleUrls: ['./app-admin-ingredients.component.css'],
})
export class AppAdminIngredientsComponent {
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  displayedColumns: String[] = [
    'ID',
    'Nome',
    'Preço',
    'Quantidade',
    'Marca',
    'Ação',
  ];
  dataSource: MatTableDataSource<Ingrediente>;
  ingredientes: Ingrediente[];
  constructor(
    public dialog: MatDialog,
    private estoqueService: EstoqueService
  ) {
    this.estoqueService
      .getEstoque()
      .subscribe((data) => (this.ingredientes = data));
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
    const ingredient = {
      nome: row_obj.first,
      preco: row_obj.second,
      quantidade: row_obj.third,
      marca: row_obj.fourth,
    } as Ingrediente;

    this.estoqueService
      .addIngrediente(ingredient)
      .subscribe((result) => this.ingredientes.push(result));
    this.table.renderRows();
    this.estoqueService
      .getEstoque()
      .subscribe((data) => (this.ingredientes = data));
  }

  updateRowData(row_obj) {
    this.ingredientes = this.ingredientes.filter((value, key) => {
      if (value.id == row_obj.id) {
        value.id = row_obj.id;
        value.nome = row_obj.first;
        value.preco = row_obj.second;
        value.quantidade = row_obj.third;
        value.marca = row_obj.fourth;
      }

      this.estoqueService.updateIngrediente(row_obj.id, row_obj).subscribe();
      this.estoqueService
        .getEstoque()
        .subscribe((data) => (this.ingredientes = data));

      return true;
    });
  }

  deleteRowData(row_obj) {
    this.ingredientes = this.ingredientes.filter((value, key) => {
      return value.id != row_obj.id;
    });

    this.estoqueService.deleteIngrediente(row_obj.id).subscribe();
  }
}
