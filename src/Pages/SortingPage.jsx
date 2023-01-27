import React, { useEffect, useMemo, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Board from '../Components/sorting/Board';
import ColorDescription from '../Components/sorting/ColorDescription';
import {
  size,
  iteratorColor,
  curColor,
  maxElementColor,
  cof,
  maxHeight,
  getMeaningByPath,
} from '../Components/sorting/SortingMetadata';
import useBoard from '../Components/sorting/useBoardHook';
import './SortingPage.css';
import '../Components/sorting/DescriptionSection.css';

const SortingPage = () => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const { filling, description } = useBoard();

  const currentMeaning = useMemo(() => {
    const curMeaning = getMeaningByPath(params.sortingType);
    document.title = curMeaning.name;
    return curMeaning;
  }, [params.sortingType]);

  useEffect(() => {
    if (!filling) {
      setLoading(false);
    }
  }, [filling]);

  if (loading) {
    return (
      <div>
        <p>Loading....</p>
      </div>
    );
  }

  return (
    <React.Fragment>
      <Container className="sortingPage">
        <div className="row">
          <Board />
          <div className="row d-none d-lg-block">
            <div style={{ height: '450px' }}></div>
          </div>
          <div className="row d-block d-lg-none">
            <div style={{ margin: '2em 0', color: 'red' }}>
              To see visualisation open on desktop...
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="algorithm_description">{description}</div>
            </div>
            <div className="d-none d-lg-block col-4">
              <h3 style={{ marginBottom: '2rem' }}>Agenda</h3>
              <ColorDescription
                color={iteratorColor}
                meaning={currentMeaning.iteratorColor}
              />
              <ColorDescription
                color={curColor}
                meaning={currentMeaning.curColor}
              />
              <ColorDescription
                color={maxElementColor}
                meaning={currentMeaning.maxElementColor}
              />
              <hr />
              <br />
              <div className="row">
                <div className="col-8">
                  <h5>Number of elements: </h5>
                </div>
                <div className="col-4">
                  <p>{size}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <h5>Values in array: </h5>
                </div>
                <div className="col-4">
                  <p>[0, {maxHeight}]</p>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <h5>Values visible on board: </h5>
                </div>
                <div className="col-4">
                  <p>[0, {maxHeight / cof}]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default SortingPage;
