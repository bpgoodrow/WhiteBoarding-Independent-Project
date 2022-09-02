// Prompt 1

// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

// Example
// Input: "Jasmine Ann Jones"

// Output: "Jasmine%20Ann%20Jones"

const s = "Jasmine Ann Jones";

const StringToUrl = s => {
  let returnString = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      returnString += '%20';
    } else {
      returnString += s[i];
    }
  }

  return returnString;
};

StringToUrl(s)

// with recursion

const StringToUrl1 = s => {
  if (s.length === 0) {
    return s;
  }

  return ((s[0] === ' ') ? '%20' : s[0]) + StringToUrl(s.slice(1));
};

string = "Jasmine Ann Jones"

// prompt 2

// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

// Example
// Input: [7, 9, "hi", 12, "hi" 7, 53]

// without recurssion 

const input = [7, 9, "hi", 12, "hi", 7, 53]

function removeDuplicates(input) {
  let returnArray = []

  for (let i = 0; i < a.length; i++) {
    if (returnArray.indexOf(a[i]) === -1) { // The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
      returnArray.push(a[i])
    }
  }
  return returnArray
}
removeDuplicates(input);


function removeDuplicatez(input) {
	for (i = 0; i < input.length; i++){
		for (j = i + 1; j < input.length; j++){
			if (input[i] == input[j]) {
				input[i] = ""
			}else{
				expectedOutput.push(input[i])
			}
	}
	return `expectedOutput`;
}


// prompt 3

// Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

// Example
// Input: "aaabccdddda"

// Output: "3ab2c4da"

const str3 = "aaabbcdddd"

function stringCompression (str) {
  if (str.length ==0 || str == Number) {
    return `Please enter a string`;
  }
  let output = '';
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;
    if (str[i] != str[i+1]) {
      output += str[i] + count;
      count = 0;
    }
  }
  return output;
}

stringCompression(str4);


// prompt 4

// Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean

// Example
// Input: "hello"

// Output: false

// Input: "copyright"

// Output: true

const str4 = "hello"

function unique(str4)
{
  if (str == num) {
    return `Please enter a string`;
  } else {
    for(let i = 0; i < str.length; i++)
        for(let j = i + 1; j < str.length; j++)
            if (str[i] == str[j])
                return false;
    return true;
  }
}
}

uniqu(str4)