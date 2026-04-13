import { Text, useState } from 'phaser-jsx';
import type { Dispatch, SetStateAction } from 'react';

export type SetScore = Dispatch<SetStateAction<number>>;

export function Score({ onReady }: { onReady: (setScore: SetScore) => void }) {
  const [score, setScore] = useState(0);
  onReady(setScore);

  return (
    <Text
      x={16}
      y={16}
      text={`Score: ${score}`}
      style={{
        fontFamily: '"Lucida Grande", Helvetica, Arial, sans-serif',
        fontSize: 32,
      }}
    />
  );
}
