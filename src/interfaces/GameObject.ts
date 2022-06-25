import type { Steppable } from "./Steppable";
import type { Component } from "./Component";

export abstract class GameObject implements Steppable {
    components: Component[];

    constructor(name: string) {
        this.components = [];
    }

    abstract start(): void;
    abstract update(deltaTime: number): void;
    abstract stop(): void;

    addComponent<T extends Component>(type: { new(gameObject: GameObject): T }) : T {
        let component = new type(this);
        this.components.push(component);
        return component;
    }
}