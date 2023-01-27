import React, { useMemo } from 'react';
import {
  size,
  cof,
  iteratorColor,
  curColor,
  maxElementColor,
} from './SortingMetadata';
import useBoard from './useBoardHook';
import './Board.css';

const Board = () => {
  const { array, currentMaxId, currentEl, localMax } = useBoard();

  const bars = useMemo(() => {
    let result = [];
    const colorX = 70;
    const colorY = 70;
    const colorZ = 70;

    array.forEach((el, index) => {
      let bgColor = '';
      if (index === localMax) {
        bgColor = maxElementColor;
      } else if (index === currentEl) {
        bgColor = curColor;
      } else if (index === currentMaxId) {
        bgColor = iteratorColor;
      } else {
        bgColor = `rgb(${colorX + index / 2}, ${colorY + index / 2}, ${
          colorZ + index
        })`;
      }
      const styles = {
        backgroundColor: bgColor,
        height: el * cof,
        width: 800 / size,
      };

      result.push(<div key={index} className="bar" style={styles}></div>);
    });
    return result;
  }, [array, currentEl, currentMaxId, localMax]);

  const table = useMemo(() => {
    const res = [];

    for (let i = 0; i < 20; i++) {
      let row = [];
      for (let j = 0; j < 40; j++) {
        row.push(<td key={i + ' ' + j} className="table-item"></td>);
      }
      res.push(
        <tr key={i} className="table-row">
          {row}
        </tr>
      );
    }

    return res;
  }, []);

  return (
    <div className="col-xs-12 centrify containerRelative d-none d-lg-block">
      <table className="table">
        <tbody>{table}</tbody>
      </table>
      <div className="boardScale">
        <ul>
          <li>100</li>
          <li>75</li>
          <li>50</li>
          <li>25</li>
          <li>0</li>
        </ul>
      </div>
      <div className="sortingBoard">{bars}</div>
    </div>
  );
};

export default Board;
