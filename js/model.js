
export function Disaster() {
    this.id = "";
    this.name = "";
    this.created = 0;
    this.When = 0;
}

export function Users() {
    this.email = "";
    this.name = "";
}

export class AssesmentAttribute {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.attributeType = 1;
    this.___class = 'AssesmentAttribute';
  }
}

export class Attributes {
  constructor(id, key, unit) {
    this.id = id
    this.key = key
    this.unit = unit
  }
}

export class Assesment {
    constructor(id, name, userid, assesmentAttributes) {
        this.id = id
        this.name = name
        this.userid = userid
        this.assesmentAttributes = assesmentAttributes
        this.___class = 'Assesment';
    }
}

export class Comment {
    constructor(message, authorEmail) {
        this.message = message;
        this.message = authorEmail;
    }
}
