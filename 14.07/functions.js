function getProperty(object, path, config = null) {
  let strings = path.split(".");
  for (let i = 0; i < strings.length && object !== null; i++) {
    object = evaluteObject(object[strings[i]]);
  }
  if (config && !object) return defaultValue(config);
  return object;
}

function defaultValue(config) {
  if (config) {
    return config.defaultValue;
  } else return config;
}

function evaluteObject(object) {
  if (object) {
    return object;
  } else return null;
}

function setProperty(object, path, value) {
  const strings = path.split(".");
  if (!object[strings[0]]) {
    let i;
    for (i = 0; i < strings.length - 1; i++) {
      object[strings[i]] = new Object();
      object = object[strings[i]];
    }
    object[strings[i]] = value;
    return;
  }
  let j;
  let prev = object;

  for (j = 0; j < strings.length - 1; j++) {
    if (object[strings[j]]) {
      object = object[strings[j]];
    } else throw "Error";
  }
  object[strings[j]] = value;
}
function testSetProperty() {
  let obj = {
    a: 2,
    b: {
      d: 3,
    },
  };
  console.log(obj);
  try {
    //setProperty(obj,'a.c',5);
    setProperty(obj, "c", 3);
    //setProperty(obj, "a", 3);
    //setProperty(obj,'b.d',6);
    //setProperty(obj,'b.c',23);
    //setProperty(obj,'c.d',3);
    console.log(obj);
  } catch (error) {
    console.log(error);
  }
}
testSetProperty();

function testGetProperty() {
  const person = {
    age: 14,
    friend: {
      title: "best friend",
      affection: {
        level: "high",
        power: "medium",
      },
    },
    title: "Mr",
  };
  path = "friend.affection.level";
  path2 = "age";
  path3 = "friend.title.mr";
  path4 = "friend.affection";
  path5 = "title";
  path6 = "no";
  config = {
    defaultValue: 10,
  };
  console.log(getProperty(person, path, config));
  console.log(getProperty(person, path2, config));
  console.log(getProperty(person, path3, config));
  console.log(getProperty(person, path4, config));
  console.log(getProperty(person, path5));
  console.log(getProperty(person, path6));
}
function testBind() {}
function testSet() {
  const numbers = new Set();
  numbers.add(4);
  numbers.add(5);
  numbers.add(10);
  console.log(numbers);
  console.log(numbers.has(10));
  console.log(numbers.has(6));
}
function testMap() {
  const people = new Map();
  const person1 = {
    name: "John",
    age: 15,
  };
  const person2 = {
    name: "Mary",
    age: 18,
  };
  people.set(person1, "Employed");
  people.set(person2, "Unemployed");
  console.log(people.get(person1));
  people.forEach((element) => {
    console.log(element);
  });
}
function testArray() {
  const animals = ["Tiger", "Monkey", "Zebra"];
  const numbers = [5, 3, 6, 29, 34, 12, 1, 2];
  animals.push("Dog");
  console.log(animals.toString());
  console.log(animals.sort());
  console.log(
    numbers.sort(function (a, b) {
      return a - b;
    })
  );
  animals.pop();

  console.log(animals.join("-"));
}
function testNumber() {
  let x = 4.345677;
  console.log(x.toString());
  console.log(x.toPrecision());
  console.log(x.toPrecision(2));
  console.log(x.toPrecision(8));
  console.log(x.toFixed());
  console.log(x.toFixed(3));
}
function testMath() {
  let x = -4.2;
  console.log(Math.floor(x));
  console.log(Math.ceil(x));
  console.log(Math.pow(x, 3));
  console.log(Math.abs(x));
}
function testString() {
  let string = "John is very bored today";
  console.log(string.length);
  console.log(string[2]);
  console.log(string.slice(3, 6));
  console.log(string.substring(0, 3));
}
function testBoolean() {
  let value = 10 > 8;
  console.log(value.toString());
  console.log(value.valueOf());
}
function testDate() {
  let crtDate = new Date();
  console.log(crtDate.getFullYear());
  console.log(crtDate.getDay());
  console.log(crtDate.getMonth());
  console.log(crtDate.toDateString());
  console.log(crtDate.toISOString());
}
function testRandom() {
  let min = 10;
  let max = 40;
  console.log(Math.floor(Math.random() * 20)); // generates a random number in 0 to 19
  console.log(Math.floor(Math.random() * (max - min)) + min); //random number in min to max
}
function testJSON() {
  let text = ' {"name": "John","age":"20"} ';
  console.log(JSON.parse(text));
  let person = {
    name: "John",
    age: "20",
  };
  console.log(JSON.stringify(person));
  //se folosesc cand se trimit request uri si se primesc response uri
}
//testJSON()

let array1 = [1, 2];
let array2 = [3, 4];
let array3 = [5, 6, 7];
let array4 = [8, 9, 10];

function combine(a, b) {
  var result = [];
  for (let i in a) {
    for (let j in b) {
      result.push([].concat(a[i], b[j]));
    }
  }
  return result;
}

function cartesian() {
  let parameters = Array.from(arguments);
  const a = parameters.shift();
  const b = parameters.shift();

  if (!b) {
    return a;
  } else {
    const firstTwoCombined = combine(a, b);
    parameters.unshift(firstTwoCombined);
    return cartesian.apply(null, parameters);
  }
}

//console.log(cartesian(array1, array2, array3, array4));
