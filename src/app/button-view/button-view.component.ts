import { Component, OnInit, Input } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'app-button-view',
  templateUrl: './button-view.component.html',
})
export class ButtonViewComponent implements ViewCell, OnInit {
  constructor() {}

  renderValue: string;

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

  @Input() value: string | number;
  @Input() rowData: any;

  isOpen: boolean = false;
  expanededComp: any = null;

  onClick(event) {}
}
