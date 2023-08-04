import React, { useState, useEffect } from "react";
import "./NQueen.css";
import { Nqueen } from "../Algorithm/nqueen";
import { changeDelay } from "../Utilities/Utilities";

const NQueen = () => {
  const [gridSize, setGridSize] = useState(4); //used to set size of grid i.e n*n(from 4 to 8)
  const [grid, setGrid] = useState([]);

  const createGrid = (val) => {
    var arr = [];
    for (var i = 0; i < val; i++) {
      var temp = [];
      for (var j = 0; j < val; j++) {
        if (i % 2 === j % 2) {
          temp.push("yellow element-block");
        } else {
          temp.push("brown element-block");
        }
      }
      arr.push(temp);
    }
    // console.log(arr);
    setGrid(arr);
    var ele = document.querySelectorAll(".element-block");
    for (i = 0; i < ele.length; i++) {
      ele[i].innerHTML = "";
    }
  };
  useEffect(() => {
    createGrid(4);
  }, []);

  const setGridd = (event) => {
    setGridSize(event.target.value);
    createGrid(event.target.value);
  };

  // console.log(gridSize);
  const clearHandler = () => {
    createGrid(gridSize);
  }
  return (
    <div style={{marginTop:'-25px'}}>
      <div>
        <h1>N-Queens Visualizer</h1>
      </div>
      <div style={{ marginTop: "22px" }}>
        <div>
          <label>
            Grid Size: {gridSize} X {gridSize}
            <input
              id="rangeSlider"
              type="range"
              min="4"
              max="8"
              value={gridSize}
              onChange={(event) => setGridd(event)}
            ></input>
          </label>
          <br />
          <label>
            Delay:
            <input
              type="range"
              min="5"
              max="100"
              onChange={(event) => changeDelay(event.target.value)}
            ></input>
          </label>
          <div>
            <button className="btn" id="nqueen" onClick={Nqueen} style={{marginRight:"10px"}}>
              N-Queen
            </button>
            <button className="btn" id="clear" onClick={clearHandler}>
              CLEAR
            </button>
          </div>
        </div>
        <br />
        <div className='box'>
					<table className='board'>
						<tbody>
							{
								grid === null ? null :
									grid.map((row, ridx) => (
										<tr key={ridx}>
											{
												row.map((col, cid) => (
													<td
														key={cid}
														style={{
															width: 350 / gridSize,
															height: 350 / gridSize,
															fontSize: 200 / gridSize,
														}}
														className={col} >
													</td>
                        ))
                    }
                  </tr>
                  ))
            }
          </tbody>
        </table>
      </div>
    </div>
  </div >
  );
};
export default NQueen;
