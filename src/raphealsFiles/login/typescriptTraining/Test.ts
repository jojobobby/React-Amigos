//Similar to C# or Java
//Interfaces, inheritance, and static methods
//Use --strictPropertyInitialization for proper syntax.
interface Pointlike {
    x: number;
    y: number;
  }
  interface Named {
    name: string;
  }
   
  function logPoint(point: Pointlike) {
    console.log("x = " + point.x + ", y = " + point.y);
  }
   
  function logName(x: Named) {
    console.log("Hello, " + x.name);
  }
   
  const obj = {
    x: 0,
    y: 0,
    name: "Origin",
  };
   
  logPoint(obj);
  logName(obj);

  interface Person {
    name: string;
    age: number;
  }
   
  function greet(person: Person) {
    return "Hello " + person.name;
  }

  class Shape {
    constructor() {

    }
  }

  interface PaintOptions {
  shape: Shape;
  xPos?: number;
  yPos?: number;
  }
 
function paintShape(opts: PaintOptions) {
  // ...
}
 
const shape = new Shape();
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, yPos: 100 });
paintShape({ shape, xPos: 100, yPos: 100 });