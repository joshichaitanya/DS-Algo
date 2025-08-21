/* eslint-disable */

var student = {
  firstname: 'chaitanya',
  sirname: 'joshi'
};

function printMe(city, state) {
  console.log(this.firstname + ' | ' + this.sirname + ' | ' + city + ' | ' + state + ' | ');
}

console.log('Initialisation done', student, printMe);
console.log('--------------------------');

var whatIsMyName = printMe.bind(student, 'pune');
whatIsMyName('mh');
console.log('--------------------------');

function customBinder1(...args) {
  var func = args[0];
  var bindingObj = args[1];
  var otherArgs = args.slice(2);
  return function(...args2) {
    func.apply(bindingObj, [...otherArgs, ...args2]);
  };
}

var whatIsMyName2 = customBinder1(printMe, student, 'pune');
whatIsMyName2('mh');
console.log('--------------------------');

Function.prototype.customBinder2 = function(...args) {
  var currentFunc = this;
  var bindObj = args[0];
  var otherParams = args.slice(1);
  return function(...args2) {
    currentFunc.apply(bindObj, [...otherParams, ...args2]);
  };
};

myfunc = printMe.customBinder2(student, 'pune');
myfunc('mh');
