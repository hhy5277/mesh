'use strict';

/* SINGLE VALUES */
const name = "World";
const template_lit = `Hello ${name}!`;
const number = 123;
const boolean_true = true;
const boolean_false = false;
const object_string = String("Hello world!");
const object_number = Number(123);
const object_boolean = Boolean(1);
const result = number + Math.random();
const empty_null = null;
const empty_undefined = undefined;
const regex = /beans/;
const str_to_test = 'bean';
const regex_result = regex.test(str_to_test);

const single_values = [
    ["name", name],
    ["template_lit", template_lit],
    ["number", number],
    ["boolean_true", boolean_true],
    ["boolean_false", boolean_false],
    ["object_string", object_string],
    ["object_number", object_number],
    ["object_boolean", object_boolean],
    ["result", result],
    ["empty_null", empty_null],
    ["empty_undefined", empty_undefined],
  	["regex", regex],
  	["str_to_test", str_to_test],
  	["regex_result", regex_result],
]
Mesh.bulk_attach(single_values, [0, 0]);

/* ARRAYS */

const arr = [
  1, 
  'two', 
  true, 
  ['a', 'b'], 
  {k: 'v'}, 
  x => x ** 2, 
  null, 
  undefined,
];
const new_arr = arr.map(x => typeof x);

Mesh.attach("arr", arr, [0, 3]);
Mesh.attach("new_arr", new_arr, [0, 4]);

/* OBJECTS */

const obj = {
  a_key: 123,
  'another_one': Math.random(),
};
const new_obj = (() => {
  const output = {};
  for (let [k, v] of Object.entries(obj)) {
    let new_k = String(v);
    output[new_k] = k;
  };
  return output;
})();
Mesh.attach("obj", obj, [0, 6]);
Mesh.attach("new_obj", new_obj, [3 + Object.keys(obj).length, 6]);

/* FUNCTIONS */

const arrow_fn = () => "cool beans";
Mesh.attach("arrow_fn", arrow_fn, [0, 9]);