import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateWinner(squares: Array<string | null>) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

export function calculateTurns(squares: Array<string | null>) {
  return squares.filter((square) => square !== null).length;
}

export function calculateStatus(
  winner: string | null,
  turns: number,
  player: string
) {
  if (winner) {
    return "The Winner Is: " + winner;
  } else if (!winner && !turns) {
    return "Draw";
  } else {
    return `Next Player Is: ${player}`;
  }
}
