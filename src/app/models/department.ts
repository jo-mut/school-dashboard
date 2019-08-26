export class Department {
    private _id: number;
    private _name: string;
    private _image: string;
    private _professors: number;
    private _students: number;
    private _sub_departments: number;

    constructor() {
             
    }

    get id() {
        return this._id;
    }

    set id(id: number) {

    }

    get name(){
        return this._name
    }

    set name(name: string) {
        
    }

    get image() {
        return this._image
    }

    set image(image: string) {

    }

    get students() {
        return this._students
    }

    set students(students: number) {
    
    }

    get professors() {
        return this._professors
    }

    set department(professors: string) {

    }

    get sub_departments() {
        return this._sub_departments
    }

    set sub_departments(sub_departments: number) {
        
    }
}