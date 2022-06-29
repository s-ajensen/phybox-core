import type { Steppable } from "./Steppable";
import type { Component } from "./Component";
import { Drawable } from "./Drawable";
import { SimulationContext } from "../base/SimulationContext";

export abstract class GameObject implements Steppable, Drawable {
    name: string;
    simContext: SimulationContext;
    components: Component[];

    constructor(name: string, simContext: SimulationContext) {
        this.name = name;
        this.simContext = simContext;
        this.components = [];
    }

    abstract start(): void;
    abstract update(deltaTime: number): void;
    abstract stop(): void;
    abstract draw(deltaTime: number): void;

    addComponent<T extends Component>(type: { new(gameObject: GameObject, ...args: any): T }, ...args: any) : T {
        let component = new type(this, args);
        this.components.push(component);
        return component;
    }

    getComponent<T extends Component>(type: { new(gameObject: GameObject): T}): any {
        return this.components.find(c => c instanceof type) ?? null;
    }
}