import React from "react";
import { Container } from "react-bootstrap";
import "./AboutSortingPage.css";

const AboutSortingPage = () => {
  return (
    <React.Fragment>
      <Container>
        <section className="aboutSorting">
          <h1>Sorting algorithm? Why we need it?</h1>
          <br />

          <p>
            In computer science, a sorting algorithm is an algorithm that puts
            elements of a list into an order. The most frequently used orders
            are numerical order and lexicographical order, and either ascending
            or descending. Efficient sorting is important for optimizing the
            efficiency of other algorithms (such as search and merge algorithms)
            that require input data to be in sorted lists. Sorting is also often
            useful for canonicalizing data and for producing human-readable
            output.
          </p>
          <br />

          <p>
            Formally, the output of any sorting algorithm must satisfy two
            conditions:
          </p>
          <ol>
            <li>
              The output is in monotonic order (each element is no
              smaller/larger than the previous element, according to the
              required order).
            </li>
            <li>
              The output is a permutation (a reordering, yet retaining all of
              the original elements) of the input.
            </li>
          </ol>
          <br />

          <p>
            For optimum efficiency, the input data should be stored in a data
            structure which allows random access rather than one that allows
            only sequential access.
          </p>
        </section>
      </Container>
    </React.Fragment>
  );
};

export default AboutSortingPage;
