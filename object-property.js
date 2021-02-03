const students = [
    { id: 21, name: 'Omor Sunny'},
    { id: 31, name: 'Maannaaa'},
    { id: 41, name: 'Moyuri'},
    { id: 51, name: 'DeepJol'}
];
//map
const names = students.map( s => s.name);
console.log(names);

const ids = students.map(s => s.id);
console.log(ids);
//filter
const bigger = students.filter(s => s.id > 40);
console.log(bigger);
//find
const biggerOne = students.find(s => s.id > 40);
console.log(biggerOne);

