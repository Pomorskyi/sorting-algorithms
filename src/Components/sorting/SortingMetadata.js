const size = 200;
const maxHeight = 400;
const cof = 4;
const curColor = 'magenta';
const iteratorColor = 'yellow';
const maxElementColor = 'red';

const meanings = {
  insertionSort: {
    name: 'Insertion Sort',
    description: '',
    curColor: 'place where to put the biggest element from non-ordered part of array',
    iteratorColor: 'index of iterator of finding max in non-ordered part of array',
    maxElementColor: 'the biggest elemenet found by iterator on current'
  },
  selectionSort: {
    name: 'Selection Sort',
    description: '',
    curColor: 'place where to put the biggest element from non-ordered part of array',
    iteratorColor: 'index of iterator of finding max in non-ordered part of array',
    maxElementColor: 'the biggest elemenet found by iterator on current'
  },
  bubbleSort: {
    name: 'Bubble Sort',
    description: '',
    curColor: 'place where to put the biggest element from non-ordered part of array',
    iteratorColor: 'index of iterator of finding max in non-ordered part of array',
    maxElementColor: 'the biggest elemenet found by iterator on current'
  },
  mergeSort: {
    name: 'Merge Sort',
    description: '',
    curColor: 'place where to put the biggest element from non-ordered part of array',
    iteratorColor: 'index of iterator of finding max in non-ordered part of array',
    maxElementColor: 'the biggest elemenet found by iterator on current'
  },
  quickSort: {
    name: 'Quick Sort',
    description: '',
    curColor: 'place where to put the biggest element from non-ordered part of array',
    iteratorColor: 'index of iterator of finding max in non-ordered part of array',
    maxElementColor: 'the biggest elemenet found by iterator on current'
  },
  heapSort: {
    name: 'Heap Sort',
    description: '',
    curColor: 'place where to put the biggest element from non-ordered part of array',
    iteratorColor: 'index of iterator of finding max in non-ordered part of array',
    maxElementColor: 'the biggest elemenet found by iterator on current'
  },
  countingSort: {
    name: 'Counting Sort',
    description: '',
    curColor: 'place where to put the biggest element from non-ordered part of array',
    iteratorColor: 'index of iterator of finding max in non-ordered part of array',
    maxElementColor: 'the biggest elemenet found by iterator on current'
  },
  radixSort: {
    name: 'Radix Sort',
    description: '',
    curColor: 'place where to put the biggest element from non-ordered part of array',
    iteratorColor: 'index of iterator of finding max in non-ordered part of array',
    maxElementColor: 'the biggest elemenet found by iterator on current'
  }
}

function getMeaningByPath(parameter) {
  if(!parameter) {
    return null
  }

  let name = ''
  switch(parameter) {
    case 'insertion-sort': name = 'insertionSort'; break;
    case 'selection-sort': name = 'selectionSort'; break;
    case 'bubble-sort': name = 'bubbleSort'; break;
    case 'merge-sort': name = 'mergeSort'; break;
    case 'quick-sort': name = 'quickSort'; break;
    case 'heap-sort': name = 'heapSort'; break;
    case 'counting-sort': name = 'countingSort'; break;
    case 'radix-sort': name = 'radixSort'; break;
    default: ;
  }
  
  if(name === '') {
    return null;
  }

  return meanings[name]
}

export {
  size,
  maxHeight,
  cof,
  curColor,
  iteratorColor,
  maxElementColor,
  meanings,
  getMeaningByPath
};