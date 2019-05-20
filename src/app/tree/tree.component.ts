import { Component, OnInit } from '@angular/core';

import { Node } from '../shared/models/node.model';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  startingValue: number;
  nodes: Node[] = [
    {
      previousValue: 5,
      leftValue: 6,
      rightValue: 7
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
