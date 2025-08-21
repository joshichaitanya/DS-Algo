//  0  1   2   3   4   5   6   7
// [#, 10, 20, 30, 25, 27, 35, 40]
/**
                  10
             20         30
          25    27   35     40
 */

class MinHeap {
  constructor() {
    this.heap = ['#'];
  }
  getLeftIndex(i) {
    return i * 2;
  }
  getRightIndex(i) {
    return i * 2 + 1;
  }
  getParentIndex(i) {
    return Math.floor(i / 2);
  }
  insert(n) {
    this.heap.push(n);
    let cursor = this.heap.length - 1;
    while (cursor > 0) {
      const parentIndex = this.getParentIndex(cursor)
      if(this.heap[parentIndex] >= this.heap[cursor]) {
        let temp = this.heap[parentIndex];
        [this.heap[parentIndex], this.heap[cursor]] = [this.heap[cursor], this.heap[parentIndex]]
        this.heap[cursor] = temp;
        cursor = parentIndex;
      }else { break }
    }
  }
  extract() {
    const returnVal = this.heap[1]
    this.heap[1] = this.heap.pop()
    
    let i = 1
    while(i < this.heap.length) {
      let left = this.getLeftIndex(i)
      let right = this.getRightIndex(i)
      if (this.heap[i] > this.heap[left] || this.heap[i] > this.heap[right]) {
        if (this.heap[left] < this.heap[right]) {
          [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]]
          i = left
        }
        else {
          [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]]
          i = right
        }
      }
      i++
    }
    
    return returnVal
  }
  print() {
    console.log(this.heap);
  }
}

const heap = new MinHeap();
heap.insert(10);
heap.insert(20);
heap.insert(30);
heap.insert(40);
heap.insert(5);
heap.insert(1);
heap.print();
heap.extract();
heap.print();
heap.extract();
heap.print();
