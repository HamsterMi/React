export class Developer {
  constructor(props) {
    this.name = props.name;
    this.salary = props.salary;
    this.department = props.department;
  }
  displayInfo() {
    return this.name + " " +  this.salary  + " " + this.department;
  }
}
