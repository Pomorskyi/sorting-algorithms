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
    curColor: 'a place where the last new element was placed',
    iteratorColor: 'index of comparing with a new element',
    maxElementColor:
      'new element or place where ordered part of the array will be expanded',
  },
  selectionSort: {
    name: 'Selection Sort',
    description: '',
    curColor:
      'a place where to put the smallest element from the non-ordered part of the array',
    iteratorColor:
      'index of the iterator of finding min in the non-ordered part of the array',
    maxElementColor:
      'the smallest element found by the iterator on the current step',
  },
  bubbleSort: {
    name: 'Bubble Sort',
    description: '',
    curColor: 'the element which is swapped with the iterator',
    iteratorColor: 'iterator of whole the array',
    maxElementColor:
      'a place where the next element from the non-ordered part of the array will be placed',
  },
  mergeSort: {
    name: 'Merge Sort',
    description: '',
    curColor: 'swapping iterator',
    iteratorColor:
      'the element which paint ordered section where iterator was last ',
    maxElementColor:
      'almost the last element of the ordered section of the non-ordered array',
  },
  quickSort: {
    name: 'Quick Sort',
    description: '',
    curColor: 'sorting iterator',
    iteratorColor: 'the start of sorting section',
    maxElementColor: 'the end of the sorting section',
  },
  heapSort: {
    name: 'Heap Sort',
    description: '',
    curColor: 'the start of the non-ordered section of the array',
    iteratorColor: 'sorting iterator',
    maxElementColor:
      'the place where last sorted element was placed, righthanded part of the array have been already sorted',
  },
  countingSort: {
    name: 'Counting Sort',
    description: '',
    curColor: 'iterator showing the repeating frequency of each element',
    iteratorColor:
      'iterator counts the number of the reapeating current element',
    maxElementColor: 'index of placing ordered element back in the array',
  },
  radixSort: {
    name: 'Radix Sort',
    description: '',
    curColor:
      'iterator which shows a number that is selected for sorting for the current step',
    iteratorColor: 'counting iterator',
    maxElementColor: 'index of placing ordered element back in array',
  },
};

function getMeaningByPath(parameter) {
  if (!parameter) {
    return null;
  }

  let name = '';
  switch (parameter) {
    case 'insertion-sort':
      name = 'insertionSort';
      break;
    case 'selection-sort':
      name = 'selectionSort';
      break;
    case 'bubble-sort':
      name = 'bubbleSort';
      break;
    case 'merge-sort':
      name = 'mergeSort';
      break;
    case 'quick-sort':
      name = 'quickSort';
      break;
    case 'heap-sort':
      name = 'heapSort';
      break;
    case 'counting-sort':
      name = 'countingSort';
      break;
    case 'radix-sort':
      name = 'radixSort';
      break;
    default:
  }

  if (name === '') {
    return null;
  }

  return meanings[name];
}

export {
  size,
  maxHeight,
  cof,
  curColor,
  iteratorColor,
  maxElementColor,
  meanings,
  getMeaningByPath,
};
