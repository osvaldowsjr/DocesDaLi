import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ingredient, item } from 'src/_models/slides';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-admin-ingredients',
  templateUrl: './app-admin-ingredients.component.html',
  styleUrls: ['./app-admin-ingredients.component.css']
})
export class AppAdminIngredientsComponent implements AfterViewInit {

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<ingredient>;
  displayedColumns: String[] = ['ID','name', 'preço','Quantidade','action'];

  constructor(public dialog: MatDialog) {
    var d = new Date();
    const ingredients: ingredient[] = [new ingredient(d.getTime().toString(),"Leite condensado",5,"12.00")
    ]
    this.dataSource = new MatTableDataSource(ingredients);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '20%',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Adicionar'){
        this.addRowData(result.data);
      }else if(result.event == 'Editar'){
        this.updateRowData(result.data);
      }else if(result.event == 'Deletar'){
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj){
    var d = new Date();
    let result: ingredient[] = this.dataSource.data;
    result.push(
      new ingredient(d.getTime().toString(),row_obj.name,row_obj.amount,row_obj.price)
    );
    this.dataSource.data = result
    this.table.renderRows();
  }

  updateRowData(row_obj){
    this.dataSource.data = this.dataSource.data.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.id = row_obj.id;
        value.name = row_obj.name;
        value.amount = row_obj.amount;
        value.price = row_obj.price;
      }
      return true;
    });
  }

  deleteRowData(row_obj){
    this.dataSource.data = this.dataSource.data.filter((value,key)=>{
      return value.id != row_obj.id;
    });
  }
}
