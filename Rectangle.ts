class Rectangle {
    private length: number;
    private breath: number;
    constructor() {

    }
    perimeter(l, b) {
        this.breath = b;
        this.length = l;
        return (2 * (this.length + this.breath))
    }
    area(l, b) {
        this.length = l;
        this.breath = b;
        return (this.length * this.breath);
    }
}