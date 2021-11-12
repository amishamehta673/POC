import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from "highcharts/modules/exporting"

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  label!: string;
  @Input()
  total!: string;
  // @Input()
  // percentage!: string;

  Highcharts=Highcharts;
  chartOptions={};
  constructor() { }

  ngOnInit() {
    this.chartOptions={
      title: {
        text: null
    }
    }
    HC_exporting(this.Highcharts)
  }

}
