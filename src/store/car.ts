import { makeAutoObservable } from "mobx";


class Car {
    constructor() {
        makeAutoObservable(this,{},{autoBind: true});
    }
    list = ['Tesla', 'BMW', 'Audi'];
}

export default new Car();
