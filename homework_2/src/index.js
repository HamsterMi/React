import { Developer /* as Developer */ } from "./developer";

const KOSTYA = {
  name: "KOSTYA",
  salary: 40000,
  department: "Front"
};

let developerKostya = new Developer(KOSTYA);
console.log(developerKostya);
console.log(developerKostya.displayInfo());
/* console.log(Developer); */
