const fs = require("fs"); //

function main(fileName) {
  fs.readFile(fileName, "utf-8", function (err, data) {
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
