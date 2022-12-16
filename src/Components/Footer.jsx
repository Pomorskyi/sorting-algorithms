import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer container'>
      <div className='row'>
        <div className='col-8'>
          <h4>
           References:
          </h4>
          <ul>
            <li>
              <a 
                href='https://en.wikipedia.org/wiki/Sorting_algorithm' 
                target='_blank' 
                rel="noreferrer">
                  Wikipedia
              </a>
            </li>
            <li>
              <a 
                href='https://www.freecodecamp.org/news/sorting-algorithms-explained-with-examples-in-python-java-and-c/' 
                target='_blank' 
                rel="noreferrer">
                  freecodecamp
              </a>
            </li>
          </ul>
        </div>
        <div className='col-4'>
          <h4>Made by: <a href='https://github.com/Pomorskyi' target='_blank' rel="noreferrer">Mykhailo Pomorskyi</a></h4>
          <p>This site is made only in educational reasons and is not for commercial usage!</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer