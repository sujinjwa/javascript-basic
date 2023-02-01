class Employee {
    #department = '';

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get department() {
        return alert(`${this.#department}`)
    }

    static clockIn() {
        alert('출근')
    }
    
    static clockOut() {
        alert('퇴근')
    }
}

class ProductManager extends Employee {
    constructor() {
        this.department = '기획';
    }
}

class Developer extends Employee {
    constructor() {
        this.department = '개발';
    }
}