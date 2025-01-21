import { Button } from "@/components/ui/button";

interface SqueareProps {
  value: string | null;
  onSquareClick: () => void;
}

export default function Square({ value, onSquareClick }: SqueareProps) {
  return (
    <Button onClick={onSquareClick} className="w-full h-full text-xl font-bold">
      {value}
    </Button>
  );
}
