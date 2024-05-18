function createUserProfiles(originalNames, modifiedNames) {
 
  if (originalNames.length !== modifiedNames.length) {
    throw new Error("Both arrays must have the same length");
  }


  const userProfiles = originalNames.map((name, index) => ({
    id: index + 1,
    originalName: name,
    modifiedName: modifiedNames[index]
  }));

  return userProfiles;
}


const originalNames = ["Fafa", "Ant", "Lee", "Yaa", "Kwamena"];
const formattedStrings = ["today", "IS", "a", "GREAT", "day"]; 


const userProfiles = createUserProfiles(originalNames, formattedStrings);

console.log(userProfiles);

