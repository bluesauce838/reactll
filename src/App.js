import React from "react";
import "./style.css";

export default function App() {
  console.clear()

class Node{
  constructor(val){
    this.value = val
    this.next = null
  }
}

class LinkedList{
  constructor(){
    this.head = null
    this.size = 0
    this.insertAt = (value, pos) => {
      let node = new Node(value)
      if(this.head === null){
        this.head = node
      }
      else if(pos == 0){
        node.next = this.head
        this.head = node
      }
      else{
        let currNode = this.head
        let cnt = 0
        while(cnt < pos-1){
          cnt++
          currNode = currNode.next
        }
        node.next = currNode.next
        currNode.next = node
      }
      this.size += 1
    }
    
    this.insertEnd = (val) => {
      let node = new Node(val)
      if(this.head === null){
        this.head = node
      }
      let temp =  this.head
      while(temp.next!==null){
        temp = temp.next
      }
      temp.next = node
      this.size += 1
    }
    
    this.removeFrom = (pos) => {
      if(this.head == null){
        return -1
      }  
      else if(pos == 0){
        this.head = this.head.next
      }
      else{
        let temp = this.head
        let cnt = 0
        while(cnt < pos-1){
          cnt++
          temp = temp.next
        }
        temp.next = temp.next.next
      }
      this.size-=1
    }
    
    this.removeEnd = () => {
      if(this.head == null){
        return -1
      }
      let pos = this.size - 1
      let cnt = 0
      let temp = this.head
      while(cnt < pos - 1){
        cnt++
        temp = temp.next
      }
      temp.next = null
      this.size -= 1
    }
  }
}

let ll = new LinkedList()
ll.insertAt(5,0)
ll.insertAt(3,1)
ll.insertAt(10,2)
ll.insertAt(4,3)
ll.insertAt(8,4)
ll.insertEnd(20)
ll.removeFrom(2)
ll.removeEnd()
ll.insertAt(30,2)
console.log(ll.head)

let compareLL = (ll1, ll2) => {
  if(ll1.size !== ll2.size){
    return 0
  }
  while(ll1.head !== null && ll2.head !== null){
    if(ll1.head.value !== ll2. head.value){
      return 0
    }
    ll1.head = ll1.head.next
    ll2.head = ll2.head.next
  }
  if(ll1.head == null && ll2.head == null){
    return 1
  }
  return 0
}

let ll1 = new LinkedList()
ll1.insertAt(1,0)
ll1.insertAt(2,1)
ll1.insertAt(3,2)
ll1.insertAt(4,3)

let ll2 = new LinkedList()
ll2.insertAt(1,0)
ll2.insertAt(2,1)
ll2.insertAt(3,2)
ll2.insertAt(4,3)

console.log(compareLL(ll1,ll2))

// console.log(ll1.head)
// let t = ll1.head
// while(t.next!==null)
//   t=t.next
// t.next = ll1.head

// console.log(ll1.head)
  return (
    <div>
     <h1>
       roll
       </h1>
    </div>
  );
}
