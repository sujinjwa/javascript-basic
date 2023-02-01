// 실습 : 계산기 만들기

class Calculator {
    constructor(number) {
        this.number = [number];
    }

    plus(input) {
        this.number.push(this.number.at(-1) + input);
    }

    minus(input) {
        this.number.push(this.number.at(-1) - input);
    }

    multiply(input) {
        this.number.push(this.number.at(-1) * input);
    }

    divide(input) {
        this.number.push(this.number.at(-1) / input);
    }

    undo() { 
        try {
            if (this.number.length === 1) throw new Error("can't go back");
            this.number.pop();
        } catch(error) {
            alert(error);
        }
    }

    printResult() {
        return alert(this.number.at(-1));
    }
}