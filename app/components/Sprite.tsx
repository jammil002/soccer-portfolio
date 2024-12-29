import { SPRITE_SHEETS } from "../sprites";

interface SpriteProps {
  type: string;
  state: string;
  x: number;
  y: number;
  width?: number;
  height?: number;
  animationFrame: number;
}

export const Sprite: React.FC<SpriteProps> = ({
  type,
  state,
  x,
  y,
  width,
  height,
  animationFrame,
}) => {
  const sheet = SPRITE_SHEETS[type];
  const stateConfig = sheet.states[state];

  const spriteStyle: React.CSSProperties = {
    position: "absolute",
    left: x,
    top: y,
    width: width || sheet.width,
    height: height || sheet.height,
    backgroundImage: `url(/sprites/${type}.png)`,
    backgroundPosition: `-${
      stateConfig.col * sheet.width + animationFrame * sheet.width
    }px -${stateConfig.row * sheet.height}px`,
    backgroundSize: `${sheet.sheetWidth}px ${sheet.sheetHeight}px`,
    imageRendering: "pixelated",
    transform: stateConfig.flipX ? "scaleX(-1)" : undefined,
  };

  return <div style={spriteStyle} className="sprite" />;
};
