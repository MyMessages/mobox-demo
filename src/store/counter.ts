import { makeAutoObservable, autorun, reaction, runInAction } from 'mobx'

class Counter {
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }
    count = 0
    increment() {
        this.count++
    }
    decrement() {
        this.count--
    }
    // 异步+1
    incrementAsync() {
        setTimeout(() => {
            runInAction(() => {
                this.count++
            })
        }, 1000)
    }
    reset() {
        this.count = 0
    }
    get double() {
        return this.count * 2
    }
}

const counter = new Counter();

autorun(() => {
    console.log('counter-count', counter.count);
})

reaction(() => counter.count, (count, oldVal) => {
    console.log('reaction-count', count);
})

export default counter;
