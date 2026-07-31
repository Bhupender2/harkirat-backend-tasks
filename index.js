const fs = require("fs"); // its a built in module to read and write the files

function main(fileName) {
  fs.readFile(fileName, "utf-8", function (err, data) {
    // basically fs.readFile ek pathroute argument leta h second encoding and third ek callback with err and data(the content inside file)
    // Hello world.
    // inside this function data the argument contain all the text inside it right
    let total = 0;
    console.log("total : ", data);
    for (let i = 0; i < data.length; i++) {
      // hello world
      if (data[i] === " ") {
        total++;
      }
    }
    console.log("habibi", total + 1);
  });
}

main("a.txt");

// cat is basically a command that reads one or more files and prints their contents to the terminal . it can also concatanate mutiple files into a single output
