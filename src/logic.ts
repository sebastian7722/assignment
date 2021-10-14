// string to array with characters and reverse each one
const reverse = (inpt: string): Array<string> => inpt.split("").reverse();

// detect and flip each character in arrray
const opposite = (arr: Array<string>): Array<String> => {
  const arrOpposite: Array<string> = [];

  arr.forEach(character => {
    if (!isNaN(parseFloat(character))) {
      //console.log(`character ${character} is a Number.`);
      arrOpposite.push(character);
    } else {
      if (character == character.toUpperCase()) {
        //console.log(`character ${character} is upper case.`);
        arrOpposite.push(character.toLowerCase());
      }
      if (character == character.toLowerCase()) {
        //console.log(`character ${character} is lower case.`);
        arrOpposite.push(character.toUpperCase());
      }
    }
  });

  return arrOpposite;
};

const reg: RegExp = /^(?=.*?[a-z])(?=.*?\d)[a-z\d]+$/i;

//Convert array to string
const assignmentResult = (inpt: string): string => {
  if (inpt.match(reg)) {
    return opposite(reverse(inpt)).join("");
  }
  return "Your imput must be alphaNumeric. for example: a1";
};

module.exports = assignmentResult;
