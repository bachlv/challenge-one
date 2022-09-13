import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function Rows({ cols }) {
  const currentRow = [];
  for (let i = 0; i < cols; i++) {
    currentRow.push(
      <div
        style={{
          background: "black",
          width: "100%",
          height: "100%",
          aspectRatio: 1,
        }}
      >
        Square
      </div>
    );
  }
  return currentRow;
}

function ChallengeOne() {
  const [rows, setRows] = useState(1);
  const [cols, setCols] = useState(1);

  useEffect(() => {});

  return (
    <>
      <h1>Challenge 1</h1>

      <label>Enter number of columns: </label>
      <input
        type="number"
        value={rows}
        onChange={(e) => setRows(e.target.value)}
      />

      <br />

      <label>Enter number of rows: </label>
      <input
        type="number"
        value={cols}
        onChange={(e) => setCols(e.target.value)}
      />

      <div style={{ padding: "2rem" }}>
        {(() => {
          const arrCols = [];
          for (let i = 0; i < rows; i++) {
            arrCols.push(
              <div
                style={{
                  display: "flex",
                  gap: "2rem",
                  width: "100%",
                  margin: "2rem 0 2rem",
                }}
              >
                <Rows cols={cols} />
              </div>
            );
          }
          return arrCols;
        })()}
      </div>
    </>
  );
}

ReactDOM.render(<ChallengeOne />, document.getElementById("root"));
