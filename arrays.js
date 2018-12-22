var chocolateBars=['snickers','hundred grand','kitkat','skittles'];

var addElementToBeginningOfArray=(array, element)=>{

array=['foo',...array];
return array
}
var destructivelyAddElementToBeginningOfArray=(array, element)=>{

array.unshift('foo');
return array;
}
var addElementToEndOfArray=(array, element)=>{

  array=[...array, 'foo']
  return array
}
var destructivelyAddElementToEndOfArray=(array,element)=>{

  array.push('foo');
  return array
}
var accessElementInArray=(array, index)=>{
array=[1,2,3];
return array[2];
}
var destructivelyRemoveElementFromBeginningOfArray=(array)=>{
  array=[1,2,3];
  array.shift();
  return array;
}
removeElementFromBeginningOfArray=(array)=>{
array=[1,2,3];
array.slice(1);
return array;
}
destructivelyRemoveElementFromEndOfArray=(array)=>{
array=[1,2,3];
array.pop();
return array;
}
removeElementFromEndOfArray=(array)=>{
array=[1,2,3];
array.slice(0, array.length-1)
return array;
}
