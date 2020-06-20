//Start off by creating an array with three student names.
const studentList = ['John', 'Robert', 'Jimmy']

//Create a loop that will prompt the user for three more names.
//After every user input, store the new name into the array.
for (let x = 0; x < 3; x++) {
	const newName = prompt("Please enter a student name");
	studentList.push(newName);
}

//Create a new loop that will iterate through the array and console log each element of the array.
for (let i = 0; i < studentList.length; i++) {
  console.log(studentList[i]);
}