"use client";

import { Button } from "@/components/ui/button";
import { useGameStore } from "@/hooks/game";
import { RotateCcw } from "lucide-react";
import Board from "../Board/board";

export default function Game() {
  const history = useGameStore((state) => state.history);
  const setHistory = useGameStore((state) => state.setHistory);

  const currentMove = useGameStore((state) => state.currentMove);
  const setCurrentMove = useGameStore((state) => state.setCurrentMove);

  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  function handlePlay(nextSquares: Array<string | null>) {
    const nextHistory = history.slice(0, currentMove + 1).concat([nextSquares]);
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  function clearHistory() {
    const initialState = history[0];
    setHistory([initialState]);
    setCurrentMove(0);
  }

  return (
    <div className="flex items-center my-20 justify-center flex-col">
      <p className="text-4xl mb-10 font-bold">Tic Tac Toe Game</p>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div>
            <Board
              xIsNext={xIsNext}
              squares={currentSquares}
              onPlay={handlePlay}
            />

            <div className="mt-10">
              <Button
                onClick={() => {
                  jumpTo(0);
                  clearHistory();
                }}
                className="w-full bg-green-500 hover:bg-green-600"
              >
                <RotateCcw /> Reset Game
              </Button>
            </div>
          </div>
          <div className="ml-8 mt-4">
            <p className="text-xl font-bold">History</p>

            <div className="mt-4">
              <ol>
                {history.map((_, historyIndex) => {
                  if (historyIndex !== 0) {
                    return (
                      <li key={historyIndex} className="mb-2">
                        <Button onClick={() => jumpTo(historyIndex)}>
                          Go to move #{historyIndex}
                        </Button>
                      </li>
                    );
                  }
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
