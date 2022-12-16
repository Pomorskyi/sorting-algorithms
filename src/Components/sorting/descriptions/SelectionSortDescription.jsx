import React from 'react'

const SelectionSortDescription = () => {
  return (
    <React.Fragment>
      <h1>Selection Sort</h1>
      <p>
        Selection Sort is one of the simplest sorting algorithms. This algorithm gets its name from the way it iterates through the array: it selects the current smallest element, and swaps it into place.
      </p>
      <br/>

      <h2>Properties</h2>
      <ul>
        <li>Space complexity: <span className='description_list_underlined'>O(n)</span></li>
        <li>Time Complexity: <span className='description_list_underlined'>O(n2)</span></li>
        <li>Sorting in Place: Yes</li>
        <li>Stable: No</li>
      </ul>
      <br />

      <h2>Algorithm</h2>
      <div className='code'>
        <ol>
          <li>Find the smallest element in the array and swap it with the first element.</li>
          <li>Find the second smallest element and swap with with the second element in the array.</li>
          <li>Find the third smallest element and swap wit with the third element in the array.</li>
          <li>Repeat the process of finding the next smallest element and swapping it into the correct position until the entire array is sorted.</li>
        </ol>
      </div>
      <br />
      <p>
        But, how would you write the code for finding the index of the second smallest value in an array?
      </p>
      <br/>

      <p>
        An easy way is to notice that the smallest value has already been swapped into index 0, so the problem reduces to finding the smallest element in the array starting at index 1.
      </p>
      <br/>

      <p>
        Selection sort always takes the same number of key comparisons — N(N − 1)/2.
      </p>

    </React.Fragment>
  )
}

export default SelectionSortDescription