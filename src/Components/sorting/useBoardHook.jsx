import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom';
import BubbleSortDescription from './descriptions/BubbleSortDescription';
import CountingSortDescription from './descriptions/CountingSortDescription';
import HeapSortDescription from './descriptions/HeapSortDescription';
import InsertionSortDescription from './descriptions/InsertionSortDescription';
import MergeSortDescription from './descriptions/MergeSortDescription';
import QuickSortDescription from './descriptions/QuickSortDescription';
import RadixSortDescription from './descriptions/RadixSortDescription';
import SelectionSortDescription from './descriptions/SelectionSortDescription';
import { 
  size, 
  maxHeight, 
  cof,
  getMeaningByPath
} from './SortingMetadata'

const useBoard = () => {
  const [array, setArray] = useState([]);
  const [currentMaxId, setCurrentMaxId] = useState(1);
  const [currentEl, setCurrentEl] = useState(0);
  const [localMax, setLocalMax] = useState(-1);
  const [filling, setFilling] = useState(true);
  const params = useParams();

  const navTitle = useMemo(() => {
    const meaning = getMeaningByPath(params.sortingType)
    if(meaning) {
      return meaning.name;
    } else{
      return 'Sorting Algorithms'
    }
  }, [params])

  function swap(arr, index1, index2) {
    let tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
    return arr
  }

  const selection_sort = useCallback(async (arr) => {
    for(let i = 0; i < size - 1; i++) {
      setCurrentEl(i);
      setLocalMax(-1);
  
      let max = i;
      for(let cur = i + 1; cur < size; cur++) {
        setCurrentMaxId(cur);
        if(arr[cur] < arr[max]) {
          setLocalMax(cur);
          max = cur;
        }
  
        await sleep(0);
      }
  
      swap(arr, i, max)
    }
  }, [])

  const insertion_sort = useCallback(async (arr) => {
    var len = arr.length;
    var i = 1;
    while (i < len) {
        setLocalMax(i + 1);
        var x = arr[i];
        var j = i - 1;

        while (j >= 0 && arr[j] > x) {
          setCurrentMaxId(j);
          arr[j + 1] = arr[j];
          j = j - 1;
          await sleep(0);
        }

        arr[j + 1] = x;
        i = i + 1;
        setCurrentEl(j);
        // await sleep(0);
    }
    setCurrentEl(-1);
    setCurrentMaxId(-1);
    setLocalMax(-1);
  }, [])

  const radix_sort = useCallback(async (arr) => {
    const countingSort = async (arr, size, place) => {
      let output = new Array(size + 1).fill(0);
      let max = Math.max(...arr);
      let freq = new Array(max + 1).fill(0);
      
      for (let i = 0; i < size; i++){
        setCurrentMaxId(i);
        const num = Math.floor(arr[i] / place) % 10;
        freq[num]++;
        await sleep(0);
      }
      
      for (let i = 1; i < 10; i++){
        await sleep(0);
        setCurrentMaxId(i);
        freq[i] += freq[i - 1];
      }
    
      for (let i = size - 1; i >= 0; i--) {
        await sleep(0);
        setCurrentMaxId(i);
        const num = Math.floor(arr[i] / place) % 10;
        output[freq[num] - 1] = arr[i];
        freq[num]--;
      }
      
      for (let i = 0; i < size; i++){
        await sleep(0);
        setLocalMax(i);
        arr[i] = output[i];
      }
    }
    
    let max = Math.max(...arr);
    for(let i = 1; parseInt(max / i) > 0; i *= 10){
      setCurrentEl(i);
      await sleep(0);
      await countingSort(arr, size, i);
    }
    
    setCurrentEl(-1);
    setCurrentMaxId(-1);
    setLocalMax(-1);
  }, [])

  const heap_sort = useCallback(async (arr) => {
    async function heapify (arr, node, heaplength) { 
      let left = node * 2;
		  let right = node * 2 + 1;
		  let largest = node;
      
		  if(left <= heaplength && arr[left - 1] >= arr[node - 1]){
		  	largest = left;
		  }
		  if(right <= heaplength && arr[right - 1] >= arr[largest - 1]){
		  	largest = right;
		  }	
		  if(largest !== node){
		  	let temp = arr[node - 1];
		  	arr[node - 1] = arr[largest - 1];
		  	arr[largest - 1] = temp;
        setCurrentMaxId(largest);
        await sleep(1);
		  	await heapify(arr, largest, heaplength);
		  }
    } 

    let n = arr.length;
    for (let i = n / 2; i > 0; i--) {
      await heapify(arr, i, n); 
      setCurrentEl(i);
      await sleep(1);
    } 

    for(let i = arr.length - 1; i >= 0; i--){
			let max = arr[0];
			arr[0] = arr[i];
			arr[i] = max;
			n--;
      setLocalMax(i);
      await sleep(1);
			await heapify(arr, 1, n);
		}
    setCurrentEl(-1);
    setCurrentMaxId(-1);
    setLocalMax(-1);
  }, [])

  const bubble_sort = useCallback(async (arr) => {
    let sorted = false, length = arr.length - 1;

    while(!sorted) {
      await sleep(0);
      setLocalMax(length--);
      sorted = true;

      for(var i = 0; i < arr.length; i++) {
        await sleep(0);
        setCurrentMaxId(i);
        if(arr[i] < arr[i-1] ) {
          let temp = arr[i];
          arr[i] = arr[i-1];
          arr[i-1] = temp;
          setCurrentEl(i - 1);
          sorted = false;
        }
      }
    }
    setCurrentEl(-1);
    setCurrentMaxId(-1);
    setLocalMax(-1);
  }, [])

  const quick_sort = useCallback(async (arr) => {
    const quickSort = async (arr, start, end) => {
      await sleep(0);
      setCurrentMaxId(start);
      setLocalMax(end);

      if(start < end) {
        let pivot = await partition(arr, start, end);
        await quickSort(arr, start, pivot - 1);
        await quickSort(arr, pivot + 1, end);
      } 
      return;
    }
    
    const partition = async (arr, start, end) => { 
      let pivot = end;
      let i = start - 1, j = start;
      while (j < pivot) {
        await sleep(0);
        setCurrentEl(j);
        if (arr[j] > arr[pivot]) {
          j++;
        }
        else {
          i++;
          swap(arr, j, i);
          j++;
        }
      }
    
      swap(arr, i + 1, pivot);
      return i + 1;
    }
    
    await quickSort(arr, 0, arr.length - 1);
    setCurrentEl(-1);
    setCurrentMaxId(-1);
    setLocalMax(-1);
  }, [])

  const merge_sort = useCallback(async (arr) => {
    async function merge(arr, start, mid, end) {
      let start2 = mid + 1;
      setCurrentMaxId(start2);
      await sleep(0);
      if (arr[mid] <= arr[start2]) {
        return;
      }
    
      while (start <= mid && start2 <= end) {
        setCurrentEl(start);
        await sleep(0);
        if (arr[start] <= arr[start2]) {
          start++;
        } else {
          let value = arr[start2];
          let index = start2;
          while (index !== start) {
            arr[index] = arr[index - 1];
            index--;
          }
          arr[start] = value;
          start++;
          mid++;
          start2++;
        }
      }
    }
  
    async function mergeSort(arr, l, r) {
      await sleep(0);
      if (l < r) {
        let m = l + Math.floor((r - l) / 2);
        setLocalMax(m);
        await mergeSort(arr, l, m);
        await mergeSort(arr, m + 1, r);

        await merge(arr, l, m, r);
      }
    }

    await mergeSort(arr, 0, arr.length - 1);
    setCurrentEl(-1);
    setCurrentMaxId(-1);
    setLocalMax(-1);
  }, [])

  const counting_sort = useCallback(async (arr) => {
    const count = {}, min = 0, max = maxHeight / cof;
    const copyOfArray = [...arr]
    // First populate the count object
    for (let i = min; i <= max; i++) {
        count[i] = 0;
    }
    for(let j = 0; j < copyOfArray.length; j++) {
      setCurrentMaxId(j);
      await sleep(0);
    }
    setCurrentMaxId(-1);
    for (let i = 0; i < copyOfArray.length; i++) {
        count[copyOfArray[i]] += 1;
        arr[i] = count[copyOfArray[i]];
        await sleep(0);
        setCurrentEl(i);
    }
    setCurrentEl(-1);
    const sortedArr = [];
    for (let i = min, j = 0; i <= max; i++) {
        while (count[i] > 0) {
            sortedArr.push(i);
            arr[j++] = i;
            count[i]--;
            
            await sleep(0);
            setLocalMax(j);
        }
    }
    setCurrentEl(-1);
    setCurrentMaxId(-1);
    setLocalMax(-1);
  }, [])

  const sleep = ms => new Promise(r => setTimeout(r, ms));

  const sortingAlgorithm = useCallback((arr) => {
    switch(params.sortingType) {
      case 'insertion-sort': insertion_sort(arr); break;
      case 'selection-sort': selection_sort(arr); break;
      case 'bubble-sort': bubble_sort(arr); break;
      case 'merge-sort': merge_sort(arr); break;
      case 'quick-sort': quick_sort(arr); break;
      case 'heap-sort': heap_sort(arr); break;
      case 'counting-sort': counting_sort(arr); break;
      case 'radix-sort': radix_sort(arr); break;
      default: break;
    }
  }, [params, selection_sort, insertion_sort, heap_sort, radix_sort, bubble_sort, quick_sort, merge_sort, counting_sort])
  
  const description = useMemo(() => {
    switch(params.sortingType) {
      case 'insertion-sort': return <InsertionSortDescription />;
      case 'selection-sort': return <SelectionSortDescription />;
      case 'bubble-sort': return <BubbleSortDescription />;
      case 'merge-sort': return <MergeSortDescription />;
      case 'quick-sort': return <QuickSortDescription />;
      case 'heap-sort': return <HeapSortDescription />;
      case 'counting-sort': return <CountingSortDescription />;
      case 'radix-sort': return <RadixSortDescription />;
      default: ;
    }
  }, [params])

  useEffect(() => {
    let arr = [];
    for(let i = 0; i < size; i++) {
      arr.push(Math.floor(Math.random() * maxHeight / cof))
    }
    setArray(arr);
    setFilling(false);
    sortingAlgorithm(arr);
  }, [])

  return {
    array,
    currentMaxId,
    currentEl,
    localMax,
    filling,
    description,
    navTitle
  }
}

export default useBoard