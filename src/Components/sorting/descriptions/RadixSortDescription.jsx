import React from 'react'

const RadixSortDescription = () => {
  return (
    <React.Fragment>
      <h1>Radix Sort</h1>
      <p>
      QuickSort, MergeSort, and HeapSort are comparison-based sorting algorithms. CountSort is not. It has the complexity of O(n+k), where k is the maximum element of the input array. So, if k is O(n), CountSort becomes linear sorting, which is better than comparison based sorting algorithms that have O(nlogn) time complexity.
      </p>
      <br/>

      <p>
        The idea is to extend the CountSort algorithm to get a better time complexity when k goes O(n2). Here comes the idea of Radix Sort.
      </p>
      <br />

      <h2>The Algorithm:</h2>
      <p>
        For each digit i where i varies from the least significant digit to the most significant digit of a number, sort input array using countsort algorithm according to ith digit. We used count sort because it is a stable sort.
      </p>
      <br />

      <p>
        Example: Assume the input array is:<br />
        10, 21, 17, 34, 44, 11, 654, 123
      </p>
      <br />

      <p>
        Based on the algorithm, we will sort the input array according to the one's digit (least significant digit).
      </p>
      <br />

      <div className='code'>
        0: 10<br />
        1: 21 11<br />
        2:<br />
        3: 123<br />
        4: 34 44 654<br />
        5:<br />
        6:<br />
        7: 17<br />
        8:<br />
        9:
      </div>
      <br />

      <p>So, the array becomes 10, 21, 11, 123, 24, 44, 654, 17.</p>
      <br />
      <p>Now, we'll sort according to the ten's digit:</p>
      <br />
      <div className='code'>
        0: <br />
        1: 10 11 17 <br />
        2: 21 123 <br />
        3: 34 <br />
        4: 44 <br />
        5: 654 <br />
        6: <br />
        7: <br />
        8: <br />
        9:
      </div>
      <br />

      <p>Now, the array becomes : 10, 11, 17, 21, 123, 34, 44, 654.</p>
      <br />
      <p>Finally, we sort according to the hundred's digit (most significant digit):</p>
      <br />
      <div className='code'>
        0: 010 011 017 021 034 044 <br />
        1: 123 <br />
        2: <br />
        3: <br />
        4: <br />
        5: <br />
        6: 654 <br />
        7: <br />
        8: <br />
        9:
      </div>
      <br />

      <p>The array becomes : 10, 11, 17, 21, 34, 44, 123, 654 which is sorted. This is how our algorithm works.</p>
    </React.Fragment>
  )
}

export default RadixSortDescription