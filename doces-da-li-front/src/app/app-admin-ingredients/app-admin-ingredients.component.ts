import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
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
  displayedColumns: String[] = ['ID','Nome', 'Preço','Quantidade',"Marca",'Ação'];
  dataSource: MatTableDataSource<ingredient>;
    constructor(public dialog: MatDialog) {
    var d = new Date();
    const ingredients: ingredient[] = [new ingredient(d.getTime().toString(),"Leite condensado",5,"12.00", "Josefina")
    ]
    this.dataSource = new MatTableDataSource(ingredients);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(action,obj) {
    const dialogConfig = new MatDialogConfig();
    const att = [obj.name,obj.price,obj.amount,obj.brand]

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '20%'

    dialogConfig.data = {
        data : obj,
        names: this.displayedColumns,
        action: action,
        attribute : att
    };
    const dialogRef = this.dialog.open(DialogBoxComponent,dialogConfig);

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
      new ingredient(d.getTime().toString(),row_obj.first,row_obj.second,row_obj.third,row_obj.fourth)
    );
    this.dataSource.data = result
    this.table.renderRows();
  }

  updateRowData(row_obj){
    this.dataSource.data = this.dataSource.data.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.id = row_obj.id;
        value.name = row_obj.first;
        value.amount = row_obj.second;
        value.price = row_obj.third;
        value.brand = row_obj.fourth;
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
