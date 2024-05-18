function processArray(numbers) {
  return numbers.map(num => {
    if (num % 2 === 0) {
      return num * num; 
    } else {
      return num * 3;   
    }
  });
}

function formatArrayStrings(strings, numbers) {
  
  if (strings.length !== numbers.length) {
    throw new Error("Both arrays must have the same length");
  }

  for (let i = 0; i < strings.length; i++) {
    if (numbers[i] % 2 === 0) {
  
      strings[i] = strings[i].toUpperCase();
    } else {
    
      strings[i] = strings[i].toLowerCase();
    }
  }

  return strings;
}

const inputArray = [1, 2, 3, 4, 5];
const processedArray = processArray(inputArray);
const stringsArray = ["today", "is", "a", "great", "day"];
const formattedStrings = formatArrayStrings(stringsArray, processedArray);

console.log(processedArray); 
console.log(formattedStrings); 
