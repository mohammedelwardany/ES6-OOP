class shape {
    constructor(length) {
        this.length = length;
    }
    print() {
        return `length here is ${this.length}`;
    }
    larea() {
        return `area here is ${this.area}`;
    }
    toString() {

        console.log(this.print());
        console.log(this.larea());
    }
}


export default class square extends shape {
    constructor(length) {
        super(length);
        this.area = this.length ** 2;
    }
}

export class rectangle extends shape {
    constructor(length, width) {
        super(length);
        this.width = width;
        this.area = this.length * this.width;
    }
}

export class circle extends shape {
    constructor(length) {
        super(length);
        this.area = Math.PI * ((this.length / 2) ** 2);
    }
}