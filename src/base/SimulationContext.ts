import type { Steppable } from "../interfaces/Steppable";
import { PhyCanvasRenderingContext2D } from "./PhyCanvasRenderingContext2D";

export class SimulationContext {
    canvas: HTMLCanvasElement;
    ctx: PhyCanvasRenderingContext2D;
    objects: Steppable[];

    constructor(canvas: HTMLCanvasElement) {
        let context = canvas.getContext('2d');

        if(!context) {
            throw new TypeError('PhyBox canvas context not found!');
        }

        this.canvas = canvas;
        this.ctx = new PhyCanvasRenderingContext2D(context);
        this.objects = [];
    }

    start() {   
        this.objects.forEach((obj) => {
            obj.start();
        });
    }

    update(deltaTime: number) {
        this.ctx.clear();
        this.objects.forEach((obj) => {
            obj.update(deltaTime);
        })
    }

    stop() {
        this.objects.forEach((obj) => {
            obj.stop();
        })
    }
}