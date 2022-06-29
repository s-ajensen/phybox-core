export class PhyCanvasRenderingContext2D {
    ctx: CanvasRenderingContext2D;

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
    }

    // To-do: implement command pattern to draw different shapes (GameObject.canvasContext will become obselete)
    path(pathFunc: (...args: any) => void) {
        this.ctx.beginPath();
        pathFunc();
        this.ctx.closePath();
        this.ctx.stroke();
    }

    clear(): void {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
}