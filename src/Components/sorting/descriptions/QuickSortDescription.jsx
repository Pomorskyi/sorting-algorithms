import React from 'react'

const QuickSortDescription = () => {
  return (
    <React.Fragment>
      <h1>Quick Sort</h1>
      <p>
        Quick sort is an efficient divide and conquer sorting algorithm. Average case time complexity of Quick Sort is <span className='description_list_underlined'>O(nlog(n))</span> with worst case time complexity being O(n^2) depending on the selection of the pivot element, which divides the current array into two sub arrays.
      </p>
      <br />

      <p>
        For instance, the time complexity of Quick Sort is approximately <span className='description_list_underlined'>O(nlog(n))</span> when the selection of pivot divides original array into two nearly equal sized sub arrays.
      </p>
      <br />

      <p>
        On the other hand, if the algorithm, which selects of pivot element of the input arrays, consistently outputs 2 sub arrays with a large difference in terms of array sizes, quick sort algorithm can achieve the worst case time complexity of <span className='description_list_underlined'>O(n^2)</span>.
      </p>
      <br />

      <h2>The steps involved in Quick Sort are:</h2>
      <br />

      <ol>
        <li>Choose an element to serve as a pivot, in this case, the last element of the array is the pivot.</li>
        <li>Partitioning: Sort the array in such a manner that all elements less than the pivot are to the left, and all elements greater than the pivot are to the right.</li>
        <li>Call Quicksort recursively, taking into account the previous pivot to properly subdivide the left and right arrays. (A more detailed explanation can be found in the comments below)</li>
      </ol>

      <h2>Complexities</h2>
      <p>
        The space complexity of quick sort is <span className='description_list_underlined'>O(n)</span>. This is an improvement over other divide and conquer sorting algorithms, which take <span className='description_list_underlined'>O(nlong(n))</span> space.
      </p>
      <br/>

      <p>
        Quick sort achieves this by changing the order of elements within the given array. Compare this with the merge sort algorithm which creates 2 arrays, each length n/2, in each function call.
      </p>
      <br />

      <p>
        However there does exist the problem of this sorting algorithm being of time <span className='description_list_underlined'>O(n*n)</span> if the pivot is always kept at the middle. This can be overcomed by utilizing a random pivot
      </p>
      <br />

      <p>
        Best, average, worst, memory: <span className='description_list_underlined'>n log(n)n log(n)n 2log(n)</span>. It's not a stable algorithm, and quicksort is usually done in-place with <span className='description_list_underlined'>O(log(n))</span> stack space.
      </p>
      <br />
      
      <p>
        The space complexity of quick sort is <span className='description_list_underlined'>O(n)</span>. This is an improvement over other divide and conquer sorting algorithms, which take <span className='description_list_underlined'>O(n log(n))</span> space.
      </p>
      <br />
      
    </React.Fragment>
  )
}

export default QuickSortDescription