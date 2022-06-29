import type { Steppable } from "./Steppable";
import type { Component } from "./Component";

export abstract class GameObject implements Steppable {
    name: string;
    components: Component[];

    constructor(name: string) {
        this.name = name;
        this.components = [];
    }

    abstract start(): void;
    abstract update(deltaTime: number): void;
    abstract stop(): void;

    addComponent<T extends Component>(type: { new(gameObject: GameObject, ...args: any): T }, ...args: any) : T {
        let component = new type(this, args);
        this.components.push(component);
        return component;
    }

    getComponent<T extends Component>(type: { new(gameObject: GameObject): T}): any {
        return this.components.find(c => c instanceof type) ?? null;
    }
}