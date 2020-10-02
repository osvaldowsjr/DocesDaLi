import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { item } from 'src/_models/slides';


@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent {

  action:string;
  local_data:any;
  names: string[];
  attributes: string[]

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public info) {
    console.log(info)
    this.attributes = info.attribute;
    this.local_data = info.data;
    this.action = info.action;
    this.names = info.names;
    this.action = info.action
    this.setInitialValues()
  }

  doAction(){
    console.log(this.attributes)
    if(this.local_data.first == void(0)){
      this.local_data.first = this.attributes[0]
    }
    console.log(this.local_data)
    this.dialogRef.close({
      event:this.action,
      data:this.local_data
    });
  }

  setInitialValues(){
    this.local_data.first = this.attributes[0]
    this.local_data.second = this.attributes[1]
    this.local_data.third = this.attributes[2]
    this.local_data.fourth = this.attributes[3]
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancelar'});
  }
}
