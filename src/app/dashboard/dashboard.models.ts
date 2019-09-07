class BaseClass {
    constructor(
        private id: number,
        private name: string,
        private description: string,
        private image: string,
        private time: string
    ) {

    }
}

export class Events extends BaseClass {
    private participants: number
    private venue: string
    constructor(_id: number, _name: string, _description: string, _image: string,
         _time: string, _participants: number, _venue: string) {
        super(_id, _name, _description, _image, _time);
        this.participants = _participants;
        this.venue = _venue;
    }
}

export class Activity extends BaseClass {
    deadline: string;
    constructor(_id: number, _name: string, _description: string, _image: string,
        _time: string, _deadline: string) {
            super(_id, _name, _description, _image, _time);
            this.deadline = _deadline;
        }
}

export class Award extends BaseClass {
    venue: string;
    constructor(_id: number, _name: string, _description: string, _image: string,
        _time: string, _venue: string) {
            super(_id, _name, _description, _image, _time);
            this.venue = _venue;
            
        }
}

export class Project extends BaseClass {
    venue: string;
    deadline: string;
    constructor(_id: number, _name: string, _description: string, _image: string,
        _time: string, _venue: string, _deadline: string) {
            super(_id, _name, _description, _image, _time);
            this.venue = _venue;
            this.deadline = _deadline;
        }
}