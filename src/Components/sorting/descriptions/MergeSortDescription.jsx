import React from 'react'

const MergeSortDescription = () => {
  return (
    <React.Fragment>
      <h1>Merge Sort</h1>
      <p>
        Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves. The major portion of the algorithm is given two sorted arrays, and we have to merge them into a single sorted array. The whole process of sorting an array of N integers can be summarized into three steps-
      </p>
      <br />

      <ul>
        <li>Divide the array into two halves.</li>
        <li>Sort the left half and the right half using the same recurring algorithm.</li>
        <li>Merge the sorted halves.</li>
      </ul>
      <br />

      <p>
        There is something known as the Two Finger Algorithm that helps us merge two sorted arrays together. Using this subroutine and calling the merge sort function on the array halves recursively will give us the final sorted array we are looking for.
      </p>
      <br />

      <p>
      Since this is a recursion based algorithm, we have a recurrence relation for it. A recurrence relation is simply a way of representing a problem in terms of its subproblems.
      </p>
      <br />

      <div className="code">
        T(n) = 2 * T(n / 2) + O(n)
      </div>
      <br />

      <p>
        Putting it in plain English, we break down the subproblem into two parts at every step and we have some linear amount of work that we have to do for merging the two sorted halves together at each step.
      </p>
      <br />

      <h2>Properties: </h2>
      <ul>
        <li>Space Complexity: <span className='description_list_underlined'>O(n)</span></li>
        <li>Time Complexity: <span className='description_list_underlined'>O(n*log(n))</span>. The time complexity for the Merge Sort might not be obvious from the first glance. The <span className='description_list_underlined'>log(n)</span> factor that comes in is because of the recurrence relation we have mentioned before.</li>
        <li>Sorting In Place: No in a typical implementation</li>
        <li>Stable: Yes</li>
        <li>Parallelizable: yes (Several parallel variants are discussed in the third edition of Cormen, Leiserson, Rivest, and Stein's Introduction to Algorithms.)</li>
      </ul>

      <h2>Complexity</h2>
      <p>
        The biggest advantage of using Merge sort is that the time complexity is only n*log(n) to sort an entire Array. It is a lot better than n^2 running time of bubble sort or insertion sort.
      </p>
      <br/>
      
      <ul>
        <li>Initially we have an array of 6 unsorted integers Arr(5, 8, 3, 9, 1, 2)</li>
        <li>We split the array into two halves Arr1 = (5, 8, 3) and Arr2 = (9, 1, 2).</li>
        <li>Again, we divide them into two halves: Arr3 = (5, 8) and Arr4 = (3) and Arr5 = (9, 1) and Arr6 = (2)</li>
        <li>Again, we divide them into two halves: Arr7 = (5), Arr8 = (8), Arr9 = (9), Arr10 = (1) and Arr6 = (2)</li>
        <li>We will now compare the elements in these sub arrays in order to merge them.</li>
      </ul>
    </React.Fragment>
  )
}

export default MergeSortDescription