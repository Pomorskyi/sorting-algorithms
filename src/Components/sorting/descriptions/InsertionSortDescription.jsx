import React from 'react'

const InsertionSortDescription = () => {
  return (
    <React.Fragment>
      <h1>Insertion Sort</h1>
      <p>
        Insertion sort is a simple sorting algorithm for a small number of elements.
      </p>

      <h2>Properties</h2>
      <ul>
        <li>Space complexity: <span className='description_list_underlined'>O(1)</span></li>
        <li>Time Complexity: <span className='description_list_underlined'>O(n), O(n* n), O(n* n) for Best, Average, Worst cases respectively.</span></li>
        <li>Best Case: <span className='description_list_underlined'>array is already sorted</span></li>
        <li>Average Case: <span className='description_list_underlined'>array is randomly sorted</span></li>
        <li>Worst Case: <span className='description_list_underlined'>array is reversely sorted.</span></li>
        <li>Sorting In Place: <span className='description_list_underlined'>Yes</span></li>
        <li>Stable: Yes</li>
      </ul>
      <br />

      <h2>Explanation</h2>
      <p>
        In Insertion sort, you compare the key element with the previous elements. If the previous elements are greater than the key element, then you move the previous element to the next position.<br/>
        Start from index 1 to size of the input array.<br />
        [ 8 3 5 1 4 2 ]
      </p>
      <br />
      
      <h5>Step 1 :</h5>
      <div className='code'>
        key = 3 //starting from 1st index.<br />
        Here `key` will be compared with the previous elements.<br />
        In this case, `key` is compared with 8. since 8&#62;3, move the element 8
        to the next position and insert `key` to the previous position.<br />
        Result: [ 3 8 5 1 4 2 ]
      </div>
      <br />

      <h5>Step 2 :</h5>
      <div className='code'>
        key = 5 //2nd index <br />
        8&#62;5 //move 8 to 2nd index and insert 5 to the 1st index.<br />
        Result: [ 3 5 8 1 4 2 ]
      </div>
      <br/>

      <h5>Step 3 :</h5>
      <div className='code'>
        key = 1 //3rd index <br />
        8&#62;1     =&#62; [ 3 5 1 8 4 2 ]  <br />
        5&#62;1     =&#62; [ 3 1 5 8 4 2 ]  <br />
        3&#62;1     =&#62; [ 1 3 5 8 4 2 ]  <br />
        Result: [ 1 3 5 8 4 2 ]
      </div>
      <br />

      <h5>Step 4 :</h5>
      <div className='code'>
        key = 4 //4th index <br />
        8&#62;4   =&#62; [ 1 3 5 4 8 2 ]  <br />
        5&#62;4   =&#62; [ 1 3 4 5 8 2 ]  <br />
        3&#62;4   ≠&#62;  stop  <br />
        Result: [ 1 3 4 5 8 2 ]
      </div>
      <br />

      <h5>Step 5 :</h5>
      <div className='code'>
        key = 2 //5th index <br />
        8&#62;2   =&#62; [ 1 3 4 5 2 8 ]  <br />
        5&#62;2   =&#62; [ 1 3 4 2 5 8 ]  <br />
        4&#62;2   =&#62; [ 1 3 2 4 5 8 ]  <br />
        3&#62;2   =&#62; [ 1 2 3 4 5 8 ]  <br />
        1&#62;2   ≠&#62; stop  <br />
        Result: [1 2 3 4 5 8]
      </div>
      <br />
    </React.Fragment>
  )
}

export default InsertionSortDescription