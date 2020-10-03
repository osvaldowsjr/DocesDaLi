import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { item } from 'src/_models/slides';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';


@Component({
  selector: 'app-storage',
  templateUrl: './app-storage.component.html',
  styleUrls: ['./app-storage.component.css']
})
export class AppStorageComponent implements AfterViewInit  {
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<item>;
  displayedColumns: string[] = ['ID','Nome', 'Preço','Descrição','Imagem','Action'];

  constructor(public dialog: MatDialog) {
    var d = new Date();
    const items: item[] = [new item(d.getTime().toString(),
      "Torta de limão",
      "https://cdn.pixabay.com/photo/2017/03/15/19/18/tartlet-2147173_1280.jpg",
      "Torta de limão coberta com chocolate", "10.00"),
    new item((d.getTime()+1).toString(), "Bolo de chocolate", "https://cdn.pixabay.com/photo/2016/11/22/18/52/cake-1850011_1280.jpg", "Delicioso bolo de chocolate", "20.00")
    ]
    this.dataSource = new MatTableDataSource(items);
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(action,obj) {
    const dialogConfig = new MatDialogConfig();
    const att = [obj.name,obj.price,obj.description,obj.pic]

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
    let result: item[] = this.dataSource.data;
    result.push(
      new item(d.getTime().toString(), row_obj.first, row_obj.fourth, row_obj.third,row_obj.second)
    );
    this.dataSource.data = result
    this.table.renderRows();
  }

  updateRowData(row_obj){
    this.dataSource.data = this.dataSource.data.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.id = row_obj.id;
        value.name = row_obj.first;
        value.price = row_obj.second;
        value.description = row_obj.third;
        value.pic = row_obj.fourth;
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

