import { Person } from './person';

export class Professor extends Person {
    private _age: number;
    private _department: string;
    private _attendance: string;

    constructor() {
        super()        
    }

    get id() {
        return this.id;
    }

    set id(id: number) {

    }

    get name(){
        return this.name
    }

    set name(name: string) {
        
    }

    get image() {
        return this.image
    }

    set image(image: string) {

    }

    get age() {
        return this._age
    }

    set age(age: number) {
    
    }

    get department() {
        return this._department
    }

    set department(department: string) {

    }

    get attendance() {
        return this._attendance
    }

    set attendance(attendance: string) {
        
    }
}