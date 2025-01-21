import { calculateStatus, calculateTurns, calculateWinner } from "@/lib/utils";
import Square from "./square";

interface BoardProps {
  xIsNext: boolean;
  squares: Array<string | null>;
  onPlay: (nextSquares: Array<string | null>) => void;
}

export default function Board({ xIsNext, squares, onPlay }: BoardProps) {
  const winner = calculateWinner(squares);
  const turns = calculateTurns(squares);
  const player = xIsNext ? "X" : "O";
  const status = calculateStatus(winner, turns, player);

  const handleClick = (i: number) => {
    if (squares[i] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[i] = player;
    onPlay(nextSquares);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-5 font-medium text-lg">{turns !== 0 && status}</div>
      <div className="grid grid-cols-3 grid-rows-3 w-[18rem] h-[18rem] gap-2">
        {squares.map((square, i) => (
          <Square key={i} value={square} onSquareClick={() => handleClick(i)} />
        ))}
      </div>
    </div>
  );
}
