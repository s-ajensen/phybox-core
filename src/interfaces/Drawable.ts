import { SimulationContext } from "../base/SimulationContext";

export interface Drawable {
    simContext: SimulationContext;

    draw(deltaTime: number): void;
}