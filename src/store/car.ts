import { makeAutoObservable } from "mobx";


class Car {
    constructor() {
        makeAutoObservable(this,{},{autoBind: true});
    }
    list = ['宝马', '奔驰', '奥迪'];
}

export default new Car();
