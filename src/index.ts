const start: number = Date.now();
const fs = require("fs");
const promptSync = require("prompt-sync");
const readLine = promptSync();
const logic = require("./logic");

const alphaNumeric: RegExp = /^(?=.*?[a-z])(?=.*?\d)[a-z\d]+$/i;
const input: string = readLine("Enter your input: ");

//detect if input contains alphaNumeric characters and output result
if (input.match(alphaNumeric)) {
  //output data to console
  const output: string = logic(input);
  console.log(output);

  //write data to json
  const stop: number = Date.now();

  const execTime: number = (stop - start) / 1000;

  const obj = {
    input: input,
    output: output,
    execution: execTime,
  };

  fs.writeFile(
    "./processed.json",
    JSON.stringify(obj, null, 2),
    (err: NodeJS.ErrnoException | null) => {
      if (err) console.log(err);
    }
  );
} else {
  console.log("Your imput must be alphaNumeric. for example: a1");
}
