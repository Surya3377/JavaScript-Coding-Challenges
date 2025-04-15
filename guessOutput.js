// ### JavaScript Output-Based Questions with Answers (50 Scenarios)

// ---

// 1. console.log(a); var a = 5;
//    - Output: `undefined`

// 2. let a = 10; var b = 20; { let a = 5; var b = 50; } console.log(a); console.log(b);
//    - Output: `10` `50`

// 3. sayHello(); function sayHello() { console.log("Hello!"); }
//    - Output: `Hello!`

// 4. console.log(x); let x = 5;
//    - Output: `ReferenceError`

// 5. for (var i = 0; i < 3; i++) { setTimeout(() => console.log(i), 1000); }
//    - Output: `3 3 3`

// 6. let obj = {name: 'John', getName: () => console.log(this.name)}; obj.getName();
//    - Output: `undefined`

// 7. let person = { name: 'Alice', greet() { console.log(this.name); } }; let greet = person.greet; greet();
//    - Output: `undefined`

// 8. console.log(typeof null);
//    - Output: `object`

// 9. Promise.reject('Oops').catch(err => console.log(err)).then(() => console.log('Continue'));
//    - Output: `Oops` `Continue`

// 10. console.log([] == false); console.log([] === false);
//     - Output: `true` `false`

// ---

// 11. console.log('5' + 1); console.log('5' - 1);
//     - Output: `'51'` `4`

// 12. console.log(typeof NaN);
//     - Output: `number`

// 13. console.log('Start'); setTimeout(() => console.log('Timeout'), 0); console.log('End');
//     - Output: `Start` `End` `Timeout`

// 14. let obj = {}; obj[true] = 'yes'; obj[1] = 'no'; console.log(obj[true]);
//     - Output: `no`

// 15. let {a = 0, b = 20} = {b: 20}; console.log(a, b);
//     - Output: `0 20`

// 16. console.log(typeof undeclared);
//     - Output: `undefined`

// 17. function test(a, b, c) {} console.log(test.length);
//     - Output: `3`

// 18. console.log([..."hello"]);
//     - Output: `["h", "e", "l", "l", "o"]`

// 19. let obj = Object.freeze({name: "JS"}); obj.name = "Python"; console.log(obj.name);
//     - Output: `JS`

// 20. console.log(NaN === NaN);
//     - Output: `false`

// ---

// 21. async function f() { return 42; } console.log(f());
//     - Output: `Promise {<fulfilled>: 42}`

// 22. async function f() { return await 10; } f().then(console.log);
//     - Output: `10`

// 23. let f = () => {}; console.log(f());
//     - Output: `undefined`

// 24. let a = {name: "John"}; let b = a; b.name = "Jane"; console.log(a.name);
//     - Output: `Jane`

// 25. let arr = [1,,3]; console.log(arr[1]); console.log(1 in arr);
//     - Output: `undefined` `false`

// 26. setTimeout(() => console.log("done"), 1000);
//     - Output (after 1s): `done`

// 27. const person = { name: "Alice" }; person.name = "Bob"; console.log(person.name);
//     - Output: `Bob`

// 28. function greet(name = 'Guest', age = 25) { console.log(name, age); } greet(undefined, 25);
//     - Output: `Guest 25`

// 29. console.log(isNaN("foo")); console.log(Number.isNaN("foo"));
//     - Output: `true` `false`

// 30. function hello() {} hello.prop = 5; console.log(typeof hello, hello.prop);
//     - Output: `function 5`

// ---

// 31. let x = 10; let x = 20;
//     - Output: `SyntaxError`

// 32. let x = 0; if (x = 1) { console.log("true"); }
//     - Output: `true`

// 33. console.log(Boolean("")); console.log(Boolean([])); console.log(Boolean(null));
//     - Output: `false true false`

// 34. console.log(typeof Symbol());
//     - Output: `symbol`

// 35. console.log(Object.keys([1,2,3]));
//     - Output: `["0", "1", "2"]`

// 36. let a = {x: 1}; let b = {...a, y: 2}; console.log(b);
//     - Output: `{x: 1, y: 2}`

// 37. let arr = [1,2,3]; delete arr[1]; console.log(arr, arr.length);
//     - Output: `[1, <1 empty item>, 3] 3`

// 38. let str = "abc"; console.log(str.split('').reverse().join(''));
//     - Output: `cba`

// 39. var a = 1; let b = 2; console.log(window.a); console.log(window.b);
//     - Output: `1` `undefined`

// 40. let obj = {name: "JS", func: () => {}}; console.log(JSON.stringify(obj));
//     - Output: `{"name":"JS"}`

// ---

// 41. for (let i = 0; i < 3; i++) { setTimeout(() => console.log(i), 1000); }
//     - Output (after 1s): `0 1 2`

// 42. let obj = {}; obj[function(){}] = 'Hello'; obj[function(){}] = 'World'; console.log(obj);
//     - Output: `{"function () {}":"World"}`

// 43. let a = {name: "John"}; let b = Object.assign({}, a); b.name = "Jane"; console.log(a.name);
//     - Output: `John`

// 44. let obj = {}; obj[[1,2]] = 'value'; console.log(obj['1,2']);
//     - Output: `value`

// 45. let a, b, c; a = b = c = 5; console.log(a, b, c);
//     - Output: `5 5 5`

// 46. let a = 0; if (a++ === 0) { console.log("Yes"); }
//     - Output: `Yes`

// 47. let obj = Object.freeze({nested: {name: "React"}}); obj.nested.name = "Angular"; console.log(obj.nested.name);
//     - Output: `Angular`

// 48. let arr = [1, 2, 3, 4]; arr.length = 2; console.log(arr);
//     - Output: `[1, 2]`

// 49. console.log(Math.min());
//     - Output: `Infinity`

// 50. console.log(+'10' + +'10');
//     - Output: `20`
