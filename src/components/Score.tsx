import type Phaser from 'phaser';
import { Text } from 'phaser-jsx';

interface Props {
  text: string;
  ref: (gameObject: Phaser.GameObjects.Text) => void;
}

export function Score(props: Props) {
  return (
    <Text
      x={16}
      y={16}
      text={props.text}
      style={{
        fontFamily: '"Lucida Grande", Helvetica, Arial, sans-serif',
        fontSize: '32px',
      }}
      ref={props.ref}
    />
  );
}
