import { SimulationContext } from "../base/SimulationContext";
import { GameObject } from "../interfaces/GameObject";

export class CircleTestObj extends GameObject {
    lastPosition: [number, number];
    currentPosition: [number, number];

    constructor(name: string, simContext: SimulationContext) {
        super(name, simContext);
    }

    start(): void {
        this.simContext.canvas.addEventListener("mousemove", (e) => {
            let canvasDims = this.simContext.canvas.getBoundingClientRect();
            let xPos = Math.round(e.clientX - canvasDims.left);
            var yPos = Math.round(e.clientY - canvasDims.top);

            this.currentPosition = [xPos, yPos];
        });
        
        this.simContext.canvas.addEventListener("mousedown", (e) => {
            let canvasDims = this.simContext.canvas.getBoundingClientRect();
            let xPos = Math.round(e.clientX - canvasDims.left);
            var yPos = Math.round(e.clientY - canvasDims.top);

            this.lastPosition = [xPos, yPos];
        });
    }
    update(deltaTime: number): void {
        super.update(deltaTime);
    }
    stop(): void {
        
    }
    draw(deltaTime: number): void {
        let radius = Math.sqrt(Math.pow(this.currentPosition[0] - this.lastPosition[0], 2) + 
                               Math.pow(this.currentPosition[1] - this.lastPosition[1], 2));

        this.simContext.ctx.path(() => this.canvasContext.arc(this.lastPosition[0], this.lastPosition[1], radius, 0, 2 * Math.PI));
    }
    
}