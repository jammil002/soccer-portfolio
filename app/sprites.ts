import { SpriteSheet } from "./types";

export const SPRITE_SHEETS: Record<string, SpriteSheet> = {
  player: {
    width: 32,
    height: 32,
    sheetWidth: 256,
    sheetHeight: 128,
    states: {
      "idle-down": { row: 0, col: 0, frames: 1 },
      "idle-up": { row: 1, col: 0, frames: 1 },
      "idle-left": { row: 2, col: 0, frames: 1 },
      "idle-right": { row: 2, col: 0, frames: 1, flipX: true },
      "run-down": { row: 0, col: 0, frames: 4 },
      "run-up": { row: 1, col: 0, frames: 4 },
      "run-left": { row: 2, col: 0, frames: 4 },
      "run-right": { row: 2, col: 0, frames: 4, flipX: true },
    },
  },
  ball: {
    width: 16,
    height: 16,
    sheetWidth: 64,
    sheetHeight: 16,
    states: {
      idle: { row: 0, col: 0, frames: 4 },
    },
  },
};
