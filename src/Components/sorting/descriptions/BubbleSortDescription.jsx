import React from 'react'

const BubbleSortDescription = () => {
  return (
    <React.Fragment>
      <h1>Bubble Sort</h1>
      <p>
        Just like the way bubbles rise from the bottom of a glass, bubble sort is a simple algorithm that sorts a list, allowing either lower or higher values to bubble up to the top. The algorithm traverses a list and compares adjacent values, swapping them if they are not in the correct order.
      </p>
      <br/>

      <p>
        With a worst-case complexity of O(n^2), bubble sort is very slow compared to other sorting algorithms like quicksort. The upside is that it is one of the easiest sorting algorithms to understand and code from scratch.
      </p>
      <br />

      <p>
        From technical perspective, bubble sort is reasonable for sorting small-sized arrays or specially when executing sort algorithms on computers with remarkably limited memory resources.
      </p>
      <br />

      <h2>Properties</h2>
      <ul>
        <li>Space complexity: <span className='description_list_underlined'>O(1)</span></li>
        <li>Best case performance: <span className='description_list_underlined'>O(n)</span></li>
        <li>Average case performance: <span className='description_list_underlined'>O(n*n)</span></li>
        <li>Worst case performance: <span className='description_list_underlined'>O(n*n)</span></li>
        <li>Stable: Yes</li>
      </ul>
      <br />

      <h2>Example:</h2>
      <h2>First pass through the list:</h2>
      <ul>
        <li>Starting with <span className='description_list_underlined'>[4, 2, 6, 3, 9]</span>, the algorithm compares the first two elements in the array, 4 and 2. It swaps them because 2 &#60; 4: <span className='description_list_underlined'>[2, 4, 6, 3, 9]</span></li>
        <li>It compares the next two values, 4 and 6. As 4 &#60; 6, these are already in order, and the algorithm moves on: <span className='description_list_underlined'>[2, 4, 6, 3, 9]</span></li>
        <li>The next two values are also swapped because 3 &#60; 6: <span className='description_list_underlined'>[2, 4, 3, 6, 9]</span></li>
        <li>The last two values, 6 and 9, are already in order, so the algorithm does not swap them.</li>
      </ul>
      <br />

      <h2>Second pass through the list:</h2>
      <ul>
        <li>2 &#60; 4, so there is no need to swap positions: <span className='description_list_underlined'>[2, 4, 3, 6, 9]</span></li>
        <li>The algorithm swaps the next two values because 3 &#60; 4: <span className='description_list_underlined'>[2, 3, 4, 6, 9]</span></li>
        <li>No swap as 4 &#60; 6: <span className='description_list_underlined'>[2, 3, 4, 6, 9]</span></li>
        <li>Again, 6 &#60; 9, so no swap occurs: <span className='description_list_underlined'>[2, 3, 4, 6, 9]</span></li>
      </ul>
      <br />

      <p>
        The list is already sorted, but the bubble sort algorithm doesn't realize this. Rather, it needs to complete an entire pass through the list without swapping any values to know the list is sorted.
      </p>
      <br />

      <h2>Third pass through the list:</h2>
      <ul>
        <li><span className='description_list_underlined'>[2, 4, 3, 6, 9]</span> =&#62; <span className='description_list_underlined'>[2, 4, 3, 6, 9]</span></li>
        <li><span className='description_list_underlined'>[2, 4, 3, 6, 9]</span> =&#62; <span className='description_list_underlined'>[2, 4, 3, 6, 9]</span></li>
        <li><span className='description_list_underlined'>[2, 4, 3, 6, 9]</span> =&#62; <span className='description_list_underlined'>[2, 4, 3, 6, 9]</span></li>
        <li><span className='description_list_underlined'>[2, 4, 3, 6, 9]</span> =&#62; <span className='description_list_underlined'>[2, 4, 3, 6, 9]</span></li>
      </ul>
      <br />
      
      <p>
        Clearly bubble sort is far from the most efficient sorting algorithm. Still, it's simple to wrap your head around and implement yourself.
      </p>
    </React.Fragment>
  )
}

export default BubbleSortDescription