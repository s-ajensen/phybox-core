import type { Steppable } from "./Steppable";
import type { GameObject } from "./GameObject";

export abstract class Component implements Steppable {
    gameObject: GameObject;
    
    constructor(gameObject: GameObject, ...args: any) {
        this.gameObject = gameObject;
    }

    abstract start(): void;
    abstract update(deltaTime: number): void;
    abstract stop(): void;
}