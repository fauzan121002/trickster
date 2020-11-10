# Trickster
--------------
Trickster is a javascript library of wrapped functions of javascript tricks.

Table of Contents
=================

   * [Table of contents](#table-of-contents)
   * [Installation](#installation)
   * [Usage](#usage)
      * [Format JSON](#format-json)
      * [Get unique array values](#get-unique-array-values)
      * [Filter falsy values of array](#filter-falsy-values-of-array)
      * [Sort number of array](#sort-number-of-array)
      * [Merge any](#merge-any)
      * [Transform the argument object to array](#transform-the-argument-object-to-array)
      * [HTML escape](#html-escape)
      * [Random number with range](#random-number-with-range)

## Installation

With NPM
```bash
npm install javascript-trickster
```

With Github (also run example)
```bash
git clone https://github.com/fauzan121002/trickster.git
cd trickster
npm start
```

## Usage

### Format JSON
Format Object to JSON
```js
console.log(trickster.formatJSON({name: "trickster"}));
// expected result : 
/* {
       "name": "trickster"
   } */
```

### Get unique array values
Get unique values from array
```js
console.log(trickster.getUniqueArrayValues(["name","trickster","lorem","lorem","trickster"]));
// expected result : 
// [ 'name', 'trickster', 'lorem' ]
```

### Filter falsy values of array
Filter falsy values of array (e.g NaN,0,"",false,etc.)
```js
console.log(trickster.filterFalsy([NaN,"trickster",0,"",false]));
// expected result : 
// [ 'trickster' ]
```

### Sort number of array
Sort number of array
```js
console.log(trickster.sortNumberArray([1,2,99,4,88,1002,103,72]));
// expected result : 
/* [
      1,  2,   4,   72,
      88, 99, 103, 1002
   ] */
```

### Merge any
Merge anything (e.g object,Array,string,null or undefined,etc.)
```js
console.log(trickster.mergeAny([1,2,99,4,88,1002,103,72],"hi"));
// expected result : 
/* [
      1,    2,    99,  4,
      88,   1002, 103, 72,
      'hi'
   ] */
```

### Transform the argument object to array
Transform the arguments object into an array
```js
console.log(trickster.transform());
// expected result : 
/* [
      {},
      [Function: require] {
         resolve: [Function: resolve] { paths: [Function: paths] },
         main: Module {
            id: '.',
            path: 'D:\\Projects\\Javascript\\trickster',
            exports: {},
            parent: null,
            filename: 'D:\\Projects\\Javascript\\trickster\\trickster',
            loaded: false,
            children: [Array],
            paths: [Array]
         },
         extensions: [Object: null prototype] {
            '.js': [Function (anonymous)],
            '.json': [Function (anonymous)],
            '.node': [Function (anonymous)]
         },
         cache: [Object: null prototype] {
            'D:\\Projects\\Javascript\\trickster\\trickster': [Module],
            'D:\\Projects\\Javascript\\trickster\\src\\index.js': [Module],
            'D:\\Projects\\Javascript\\trickster\\src\\format_json.js': [Module],
            'D:\\Projects\\Javascript\\trickster\\src\\get_unique_array_values.js': [Module],
            'D:\\Projects\\Javascript\\trickster\\src\\filter_falsy_values.js': [Module],
            'D:\\Projects\\Javascript\\trickster\\src\\sort_number_array.js': [Module],
            'D:\\Projects\\Javascript\\trickster\\src\\merge_any.js': [Module],
            'D:\\Projects\\Javascript\\trickster\\src\\transform.js': [Module],
            'D:\\Projects\\Javascript\\trickster\\src\\html_escape.js': [Module],
            'D:\\Projects\\Javascript\\trickster\\src\\random_number_with_range.js': [Module]
         }
      },
      Module {
         id: 'D:\\Projects\\Javascript\\trickster\\src\\transform.js',
         path: 'D:\\Projects\\Javascript\\trickster\\src',
         exports: [Function (anonymous)],
         parent: Module {
            id: 'D:\\Projects\\Javascript\\trickster\\src\\index.js',
            path: 'D:\\Projects\\Javascript\\trickster\\src',
            exports: [Object],
            parent: [Module],
            filename: 'D:\\Projects\\Javascript\\trickster\\src\\index.js',
            loaded: true,
            children: [Array],
            paths: [Array]
         },
         filename: 'D:\\Projects\\Javascript\\trickster\\src\\transform.js',
         loaded: true,
         children: [],
         paths: [
            'D:\\Projects\\Javascript\\trickster\\src\\node_modules',
            'D:\\Projects\\Javascript\\trickster\\node_modules',
            'D:\\Projects\\Javascript\\node_modules',
            'D:\\Projects\\node_modules',
            'D:\\node_modules'
         ]
      },
      'D:\\Projects\\Javascript\\trickster\\src\\transform.js',
      'D:\\Projects\\Javascript\\trickster\\src'
   ] */
```

### HTML escape
Escape html string (' < >,&," ')
```js
console.log(trickster.htmlEscape('"&<html>'));
// expected result : 
// &quot;&amp;&lt;html&gt;
```

### Random number with range
Get random number with defined range
```js
console.log(trickster.randomNumberWithRange(10000));
// expected result : 
// 0 -> 10000
```