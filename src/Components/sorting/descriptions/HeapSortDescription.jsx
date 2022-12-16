import React from 'react'

const HeapSortDescription = () => {
  return (
    <React.Fragment>
      <h1>Heap Sort</h1>
      <p>
        Heapsort is an efficient sorting algorithm based on the use of max/min heaps. A heap is a tree-based data structure that satisfies the heap property – that is for a max heap, the key of any node is less than or equal to the key of its parent (if it has a parent).
      </p>
      <br />

      <p>
        This property can be leveraged to access the maximum element in the heap in <span className='description_list_underlined'>O(logn)</span> time using the maxHeapify method. We perform this operation n times, each time moving the maximum element in the heap to the top of the heap and extracting it from the heap and into a sorted array. Thus, after n iterations we will have a sorted version of the input array.
      </p>
      <br />

      <p>
        The algorithm is not an in-place algorithm and would require a heap data structure to be constructed first. The algorithm is also unstable, which means when comparing objects with same key, the original ordering would not be preserved.
      </p>
      <br />

      <p>
        This algorithm runs in <span className='description_list_underlined'>O(nlogn)</span> time and <span className='description_list_underlined'>O(1)</span> additional space <span className='description_list_underlined'>[O(n) including the space required to store the input data]</span> since all operations are performed entirely in-place.
      </p>
      <br />

      <p>
        The best, worst and average case time complexity of Heapsort is <span className='description_list_underlined'>O(nlogn)</span>. Although heapsort has a better worse-case complexity than quicksort, a well-implemented quicksort runs faster in practice. This is a comparison-based algorithm so it can be used for non-numerical data sets insofar as some relation (heap property) can be defined over the elements.
      </p>
    </React.Fragment>
  )
}

export default HeapSortDescription