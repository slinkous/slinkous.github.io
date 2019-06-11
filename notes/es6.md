# ES6

## New variable types

- Hoisting: the practice of moving variable ```var``` declarations to the top of the function so that they remain in scope.

- ```let``` and ```const``` are scoped to the block, not the Function
- ```let``` can be reassigned but not redeclared in the same scoped
- ```const``` must be declared an initial value, can't be reassigned
- Best starting policy is to always use const unless you will need to reassign
- ``var`` ideally is not used anymore, but may still be necessary for global variables. I need to check out examples of this.

## Template Literals

Use ``` `` ``` to enclose text, and ```#{}``` to reference variables and code

- They also preserve newline characters as part of the string


- Referencing object properties:
```javaScript
const player = {
  xposition: 250,
  yposition: 250
}

const{xposition: x, yposition: y} = player

```

allows you to access with just ``x`` and ``y``

## Arrays

- Destructuring:  

```javaScript
let[label1, label2] = ["labeledthing1". "labeledthing2"]
```
