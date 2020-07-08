import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { BasicShapeModel } from "@syncfusion/ej2-angular-diagrams";

@Component({
  selector: 'app-cci',
  templateUrl: './cci.component.html',
  styleUrls: ['./cci.component.scss']
})
export class CciComponent {
  constructor() { }
  @ViewChild('diagram', {static: true})
  public shape: BasicShapeModel;
  ngOnInit(): void {
    this.shape = { type: "Basic", shape: "Rectangle" };
  }}

