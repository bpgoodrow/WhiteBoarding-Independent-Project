// Prompt 1

// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

// Example
// Input: "Jasmine Ann Jones"

// Output: "Jasmine%20Ann%20Jones"


const replace = (string) => {
  if (string === "") {
    return "";
  } else {
    return replace(string.subst(string.length)) + string[0];
  }
}

string = "Jasmine Ann Jones"

// prompt 2

// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

// Example
// Input: [7, 9, "hi", 12, "hi" 7, 53]
// input2 = Input

// Output: [7, 9, "hi", 12, 53]


function removeDuplicates {
	for (i = 0; i < input.length; i++){
		for (j = i + 1; j < input.length; j++){
			if (input[i] == input[j]) {
				input[i] = ""
			}else{
				expectedOutput.push(input[i])
			}
	}
	console.log(expectedOutput)
}



const input = [7, 9, "hi", 12, "hi", 7, 53];

function repeat(element) {
  for (let i = 2; element > i; i++) {
    if (element === element) {
      return false;
    }
  }
  return element;
}

const output = input.filter(repeat)

output



// prompt 3

// Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

// Example
// Input: "aaabccdddda"

// Output: "3ab2c4da"


// prompt 4

// Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean

// Example
// Input: "hello"

// Output: false

// Input: "copyright"

// Output: true

