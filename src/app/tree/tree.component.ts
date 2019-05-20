import { Component, OnInit } from '@angular/core';

import { Node } from '../shared/models/node.model';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  rootValue: number;
  hasChildren = false;
  nodes: Node[] = [];

  constructor() { }

  ngOnInit() {
  }

  onSubmitRootVal() {
    this.nodes[0] = {
      value: this.rootValue,
      children: []
    };
  }

  onAddNode(prevNode: Node) {
    console.log('add hit');
    prevNode.children.push(
      {
        value: prevNode.value + 1,
        children: []
      },
      {
        value: prevNode.value + 2,
        children: []
      }
    );
    this.hasChildren = true;
    console.log(this.nodes);
  }

}
