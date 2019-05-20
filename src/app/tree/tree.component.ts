import { Component, OnInit, DoCheck } from '@angular/core';

import { Node } from '../shared/models/node.model';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit, DoCheck {
  rootValue: number;
  hasChildren = false;
  tree: Node = {
      value: 5,
      children: []
    };

  constructor() {}

  ngOnInit() {
  }

  ngDoCheck() {
    // this.traverse(this.tree, this.process);
  }

  onSubmitRootVal() {
    this.tree[0] = {
      value: this.rootValue,
      children: []
    };
  }

  onAddNode(prevNode: Node) {
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
    this.traverse(prevNode, this.process);
    console.log(this.tree);
  }

  process(key, value) {
    console.log(this.tree[value]);
    // this.tree[key] = value.value;
  }

  traverse(tree, func) {
    const self = this;
    for (const i in tree) {
      if (tree) {
        func.apply(this, [i, tree[i].value]);
        if (tree[i] !== null && typeof (tree[i]) === 'object') {
          // going one step down in the object tree!!
          self.traverse(tree[i], func);
        }
      }
    }
  }




}
