var chocolateBars=['snickers','hundred grand','kitkat','skittles'];

addElementToBeginningOfArray=(array, element)=>{

array=[1];
array=['foo',...array];
return array
}
destructivelyAddElementToBeginningOfArray=(array, element)=>{
array=[1]
array.unshift('foo');
return array;
}
addElementToEndOfArray=(array, element)=>{
  array=[1];
  array.push('foo');
  return array
}
destructivelyAddElementToEndOfArray=(array,element)=>{
  array=[1];
  array=[...array, 'foo'];
  return array
}
accessElementInArray=(array, index)=>{
array=[1,2,3];
return array[2];
}
destructivelyRemoveElementFromBeginningOfArray=(array)=>{
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
