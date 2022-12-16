import React from 'react'

const CountingSortDescription = () => {
  return (
    <React.Fragment>
      <h1>Counting Sort</h1>
      <p>
        The counting sort algorithm works by first creating a list of the counts or occurrences of each unique value in the list. It then creates a final sorted list based on the list of counts.
        One important thing to remember is that counting sort can only be used when you know the range of possible values in the input beforehand.
      </p>
      <br />
      <h2>Properties</h2>
      <ul>
        <li>Space complexity: <span className='description_list_underlined'>O(k)</span></li>
        <li>Best case performance: <span className='description_list_underlined'>O(n + k)</span></li>
        <li>Average case performance: <span className='description_list_underlined'>O(n + k)</span></li>
        <li>Worst case performance: <span className='description_list_underlined'>O(n + k)</span></li>
        <li>Stable: Yes (k is the range of the elements in the array)</li>
      </ul>
    </React.Fragment>
  )
}

export default CountingSortDescription