// Type definitions for window-pos 0.0.1
// Definitions by: Soundofdarkness https://github.com/Soundofdarkness

export interface Rectangle {
    top: number;
    bottom: number;
    right: number;
    left: number;
}

export interface WindowSize {
    width: number;
    height: number;
}

export function getWindowCoords(name: string): Rectangle|null;

export function getWindowSize(name: string): WindowSize|null;