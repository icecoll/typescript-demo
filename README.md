### 安装，创建项目
- 安装[nodejs](https://nodejs.org/en/download/)
- 安装typescript: `npm install -g typescript`
- 初始化项目：
```
npm init
npx tsc --init

```

- 启动
```
npm i -D nodemon

npx nodemon -w dist dist/index.js

```

### Modules

- export ...

import { ... } from ...

- export default ...

import ... from ...



- export default 同一个module只能存在一个， export可以多个；
- 可以用export ... as ...修改需要的调用名.


### Types
- Boolean
`let b: boolean = true;`
- Number
`let num: number = 1 + 0b1 + 0o1 + 0x1;`
- String
```
const hello: string = "hello";
const world: string = 'hello';
const helloWorld = `
  ${hello}
  ${world}
`;
```
- Null & undefined
```
let n: null = null;
let u: undefined = undefined;
let someNumber: number = null;
`strictNullChecks: true`
```
- Object
`type primitveTypes = boolean | number | string | symbol | null | undefined;`
- Void
- Array
```
let array1: string[] = ['x', 'y'];
let array1: Array<string> = array1;
```
- Tuple
`let tuple: [string, number] = ['a', 1];`
- Enum

```
enum Color {
  Red,
  Green,
  Blue
}
let myColor: Color = Color.blue;
cosole.log(Color.Red, Color.Green); //1, 2
enum Color {
  Red = 2,
  Green = 1,
  Blue = 4
}
console.log(Color[4]); //Blue

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}
console.log(Color['red']); //undfined
```
- Any
```
let ANY: any;
ANY = 'string';
ANY = 1;
```
- Type assertions
```
const email = document.getElementById('email');
if(email) {
  email.addEventListener('change', e => {
    const input = e.currentTarget as HTMLInputElement; //<HTMLInputElement>e.currentTarget
    console.log(input.value);
  )
}
```
### Interface
```
interface A {
  someProp: number;
}
interface B {
  someProp: number;
  anotherProp: number;
}
let a = {someProp: 1}
```
- index Signature
```
interface A {
  someProp: number;
  [key: string]: number;
}
const a: A = {someProp: 'string'}
```
- Call signature
```
interface Sum {
  (a: number, b: number): number;
  prop1: string;
}
const sum: Sum = (a, b) => a + b;
sum.prop1 = "prop1";
```
- Extending Interface
```
interface Parent { x: string; }
interface Parent1 { y: string; }
interface Parent2 { z: string; }
interface Child extends Parent, Parent1, Parent2 {}
let child: Child = {x: 'a', y: 'b', z: 'c'}
```


