export type Steppable = {
    start() : void;
    update(deltaTime: number) : void;
    stop() : void;
}