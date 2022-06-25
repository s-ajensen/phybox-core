import type { Steppable } from "../interfaces/Steppable";

export class SimulationContext {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    objects: Steppable[];

    constructor(canvas: HTMLCanvasElement) {
        let context = canvas.getContext('2d');

        if(!context) {
            throw new TypeError('PhyBox canvas context not found!');
        }

        this.canvas = canvas;
        this.ctx = context;
        this.objects = [];
    }

    start() {   
        this.objects.forEach((obj) => {
            obj.start();
        });
    }

    update(deltaTime: number) {
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