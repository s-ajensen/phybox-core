import { GameObject } from "../../src/interfaces/GameObject";
import { Component } from "../../src/interfaces/Component";
import { mock } from "ts-mockito";
import { expect } from "chai";

class ConcreteGameObj extends GameObject {
    start(){};
    update(){};
    stop(){};
}

describe("GameObject.addComponent() tests", () => {
    let objMock: GameObject;

    it("Ensures components are added to a game object", () => {
        class B extends Component {
            start(){};
            update(){};
            stop(){};
        };

        objMock = new ConcreteGameObj("Game Object");
        let componentMock:Component = objMock.addComponent(B);

        expect(componentMock).to.equal(objMock.components[0]);
    });

    it("Ensures that optional arguments are handled by game object subtype constructor", () => {
        class B extends Component {
            subMem: string;

            constructor(gameObject: GameObject, subMem: string) {
                super(gameObject);
                this.subMem = subMem;
            }
            start(){};
            update(){};
            stop(){};
        };

        objMock = new ConcreteGameObj("Game Object")
        let componentMock:Component = objMock.addComponent(B, "Component Member");

        expect(componentMock).to.equal(objMock.components[0]);
    });
});

describe("GameObject.getComponent() tests", () => {
    let objMock: GameObject;

    class Component1 extends Component {
        constructor(gameObject: GameObject){
            super(gameObject);
        }
        start(){};
        update(){};
        stop(){};
    }

    class Component2 extends Component {
        constructor(gameObject: GameObject){
            super(gameObject);
        }
        start(){};
        update(){};
        stop(){};
    }

    it("Ensures that getComponent() returns object of subtype", () => {
        objMock = new ConcreteGameObj("Game Object");
        let componentMock1_1:Component = objMock.addComponent(Component1);
        let componentMock1_2:Component = objMock.addComponent(Component1);
        let componentMock2_1:Component = objMock.addComponent(Component2);

        expect(componentMock1_1).to.equal(objMock.getComponent(Component1));
        expect(componentMock2_1).to.equal(objMock.getComponent(Component2));
    });

    it("Ensures that getComponent() reurns null when component of type is not found", () => {
        objMock = new ConcreteGameObj("Game Object");

        expect(objMock.getComponent(Component1)).to.be.null;
    });
});