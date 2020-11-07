import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { item } from 'src/_models/slides';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss'],
})
export class DialogBoxComponent {
  action: string;
  local_data: any;
  names: string[];

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public info
  ) {
    console.log(info);
    this.local_data = info.data;
    this.action = info.action;
    this.names = info.names;
    this.action = info.action;
    this.setInitialValues();
  }

  doAction() {
    if (this.local_data.first == void 0) {
    }
    console.log(this.local_data);
    this.dialogRef.close({
      event: this.action,
      data: this.local_data,
    });
  }

  setInitialValues() {
    if (this.names.includes('Marca')) {
      this.local_data.first = this.info.data.nome;
      this.local_data.second = this.info.data.preco;
      this.local_data.third = this.info.data.quantidade;
      this.local_data.fourth = this.info.data.marca;
    } else {
      this.local_data.first = this.info.data.nome;
      this.local_data.second = this.info.data.preco;
      this.local_data.third = this.info.data.descricao;
      this.local_data.fourth = this.info.data.urlImagem;
    }
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancelar' });
  }
}
