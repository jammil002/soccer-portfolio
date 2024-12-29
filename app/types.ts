// types.ts
export interface Position {
  x: number;
  y: number;
}

export interface SpriteState {
  row: number;
  col: number;
  frames: number;
  flipX?: boolean;
}

export interface SpriteSheet {
  width: number;
  height: number;
  sheetWidth: number;
  sheetHeight: number;
  states: Record<string, SpriteState>;
}

export interface Goal {
  id: PortfolioSection;
  x: number;
  y: number;
  width: number;
  height: number;
  content: string;
}

export type PortfolioSection = "experience" | "skills" | "projects" | "about";
export type PlayerStateType =
  | "idle-down"
  | "idle-up"
  | "idle-left"
  | "idle-right"
  | "run-down"
  | "run-up"
  | "run-left"
  | "run-right";
