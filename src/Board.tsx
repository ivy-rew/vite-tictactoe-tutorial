import Square from './square';

export function Board({ xIsNext, squares, onPlay }) {

  function handleClick(i = -1) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  const winnerLine = calculateWinner(squares);
  console.log("winner: "+winnerLine)
  let status = createStatus();
  
  return (
    <>
      <div className="status">{status}</div>
      {row([0,1,2])}
      {row([3,4,5])}
      {row([6,7,8])}
    </>
  );

  function row(idx: number[]) {
    return (<div className="board-row">
        <Square value={squares[idx[0]]} 
          onSquareClick={() => handleClick(idx[0])} 
          won={winnerLine && winnerLine.includes(idx[0])} />
        <Square value={squares[idx[1]]} 
          onSquareClick={() => handleClick(idx[1])} 
          won={winnerLine && winnerLine.includes(idx[1])} />
        <Square value={squares[idx[2]]} 
          onSquareClick={() => handleClick(idx[2])} 
          won={winnerLine && winnerLine.includes(idx[2])} />
      </div>)
  }

  function createStatus() {
    if (winnerLine) {
      return "Winner: " + squares[winnerLine[0]];
    } else {
      return "Next player: " + (xIsNext ? "X" : "O");
    }
  }
}

export function calculateWinner(squares: any[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return lines[i];
    }
  }
  return null;
}
